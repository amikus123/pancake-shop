import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Form() {
  const cart = useSelector((state) => [...state.cart]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // i get before price before the calculatiobn
    let price = 0;
    cart.forEach((item) => {
      price += item.amount * item.product.price;
    });
    setTotalPrice(price);
    console.log(totalPrice);
  }, [cart, totalPrice]);
  const checkForm = (e) => {
    e.preventDefault();
    let allCorrect = true;
    // addres valiadtion
    const checkIfValid = (id, regex, mess) => {
      const value = document.getElementById(id).value;
      console.log(value);
      if (regex.test(value)) {
        console.log(22222221111);
      } else {
        console.log(444444);
      }
    };
    checkIfValid("email", /(\w\.?)+@[\w\.-]+\.\w{2,4}/, "XDDD");
  };
  const valiadeEmail = (e) => {
    console.log(e);
    console.log(e.target.value);

  };
  return (
    <div className="form main">
      <form autoComplete="on" onSubmit={checkForm} noValidate>
        <p>Address</p>
        <label htmlFor="street">
          Ulica i numer budynku
          <input
            type="text"
            name="street"
            id="street"
            placeholder="3 Maja 21"
            required
          />
          <span className="error hide">Podaj prawidłowy adres</span>
        </label>
        <label htmlFor="code">
          Kod pocztowy
          <input
            type="text"
            name="code"
            id="code"
            placeholder="21-322"
            required
          />
        </label>
        <label htmlFor="city">
          Miasto
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Warszawa"
            required
          />
        </label>
        <p>Personal data</p>
        <label htmlFor="name">
          Imię i nazwisko
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jan Kowalski"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            required
            onChange={valiadeEmail}
          />
          <span className="error hide">Podaj prawidłowy adres</span>

        </label>
        <label htmlFor="phone">
          Numer telefonu
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="123456789"
            required
          />
        </label>
        <input type="submit" value={`PAY ${totalPrice} ZŁ`} id="submit" />
      </form>
    </div>
  );
}

export default Form;
