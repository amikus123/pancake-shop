import React from "react";

function Form() {
  return (
    <div className="form main">
      <form autoComplete="on"> 
        <p>Address</p>
        <label htmlFor="street">
          Ulica i numer budynku
          <input type="text" name="street" id="street" />
        </label>
        <label htmlFor="code">
         Kod pocztowy
          <input type="text" name="code" id="code" />
        </label>
        <label htmlFor="city">
          Miasto
          <input type="text" name="city" id="city" />
        </label>
        <p>Personal data</p>
        <label htmlFor="name">
          Imię i nazwisko
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="phone">
          Numer telefonu
          <input type="text" name="phone" id="phone" />
        </label>
        <input type="submit" value="FINISH" id="submit" />
      </form>
    </div>
  );
}

export default Form;
