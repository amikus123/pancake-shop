import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      console.log("hsitoria",history) 
      console.log(history.location.hash, "hash" ) 
      if(history.location.hash === ""){
        window.scrollTo(0, 0);
      }
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);