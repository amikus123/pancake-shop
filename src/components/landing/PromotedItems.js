import React from "react";
import Button from "../general/Button";
import Menu from "../../pages/Menu";
import ProductFrame from "../general/ProductFrame";
import products from "../../data/pancakesData";
function PromotedItems() {
  return (
    <section className="promoted-items">
      <h3>Our best pancakes</h3>
      <p>Made with indigirents with of best quality</p>
      <div className="promoted-wrapper">
        {products.map((prod, index) => (
          index <=5? 
          <ProductFrame product={prod} key={index} classes={index} />
          :null
        ))}
      </div>
      <Button
        text={"MORE PANCAKES"}
        location={"/menu"}
        component={Menu}
        type={"trans"}
      />
    </section>
  );
}

export default PromotedItems;
