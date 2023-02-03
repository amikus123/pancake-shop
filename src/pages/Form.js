import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { IoWarning } from "react-icons/io5";

function Form() {
  const cart = useSelector((state) => [...state.cart]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    // I get before price before the calculatiobn
    let price = 0;
    cart.forEach((item) => {
      price += item.amount * item.product.price;
    });
    setTotalPrice(price);
  }, [cart, totalPrice]);

  const megaReg = {
    city: /^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż ]*$/,
    code: /^[0-9]{2}-[0-9]{3}?$/,
    street:
      /^[#.0-9AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż/\s,-]+$/,
    email: /(\w\.?)+@[\w\.-]+\.\w{2,4}/,
    name: /^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż ]*$/,
    phone:
      /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/,
  };
  const checkForm = (e) => {
    e.preventDefault();
    let isCorrect = true;
    Object.keys(megaReg).forEach((item) => {
      if (!validateById(item)) {
        isCorrect = false;
      }
    });
    setCorrect(isCorrect);
  };

  const validate = (e, x) => {
    const el = e.target;
    const error = el.nextSibling;
    const reg = megaReg[el.id];
    if (reg.test(el.value) && el.value.trim() !== "") {
      error.classList.remove("error-show");
      el.classList.remove("input-error");
    } else {
      error.classList.add("error-show");
      el.classList.add("input-error");
    }
  };

  const validateById = (id) => {
    const el = document.getElementById(id);
    const error = el.nextSibling;
    const reg = megaReg[el.id];
    if (reg.test(el.value) && el.value.trim() !== "") {
      error.classList.remove("error-show");
      el.classList.remove("input-error");
      return true;
    } else {
      error.classList.add("error-show");
      el.classList.add("input-error");
      return false;
    }
  };
  return (
    <div className="form main">
      {correct ? (
        <h1>Thanks for ordering!</h1>
      ) : (
        <form autoComplete="on" onSubmit={checkForm} noValidate>
          <p>Delivery address</p>
          <label htmlFor="street">
            Street address
            <input
              type="text"
              name="street"
              id="street"
              placeholder="3 Maja 21"
              required
              onChange={validate}
              onSubmit={validate}
            />
            <span className="error">
              <IoWarning />
              Please enter the correct address
            </span>
          </label>
          <label htmlFor="code">
            Zip code
            <input
              type="text"
              name="code"
              id="code"
              placeholder="21-322"
              required
              onChange={validate}
            />
            <span className="error">
              <IoWarning />
              Please enter a valid zip code
            </span>
          </label>
          <label htmlFor="city">
            City
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Warsaw"
              required
              onChange={validate}
            />
            <span className="error">
              <IoWarning />
              Please enter a valid city
            </span>
          </label>
          <p>Dane osobiste</p>
          <label htmlFor="name">
            First name and last name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jan Kowalski"
              required
              onChange={validate}
            />
            <span className="error ">
              <IoWarning />
              Please enter a valid first and last name
            </span>
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              required
              onChange={validate}
            />
            <span className="error">
              <IoWarning />
              Please enter a valid email
            </span>
          </label>
          <label htmlFor="phone">
            Phone number
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="123456789"
              required
              onChange={validate}
            />
            <span className="error">
              <IoWarning />
              Please enter a valid phone number
            </span>
          </label>
          <input type="submit" value={`PAY ${totalPrice} ZŁ`} id="submit" />
        </form>
      )}
    </div>
  );
}

export default Form;
