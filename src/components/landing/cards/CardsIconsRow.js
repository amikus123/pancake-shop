import React from "react";
import Icon from "./CardsIcon";

function IconsRow({ fun, number }) {
  return (
    <div className="icon-row hide-desktop">
      {[1, 2, 3].map((index) => {
        return <Icon fun={fun} ownNumber={index} number={number} key={index} />;
      })}
    </div>
  );
}

export default IconsRow;
