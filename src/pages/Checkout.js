import React from "react";
import Form from "../components/checkout/Form";
import List from "../components/checkout/List";

function Checkout() {
  return (
    <main className="checkout">
      {/* <h1>Checkout </h1> */}
      <List />
      <Form />
    </main>
  );
}

export default Checkout;
