import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/login.css";

export const Login = () => {
  return (
    <div className="container">
      <div className="logo"></div>
      <h2 className="heading">
        Expenses Tracker <br /> &amp; <br /> To Do List
      </h2>
      <form action="">
        <div className="input-field">
          <label htmlFor="">Who you be?</label>
          <input type="text" placeholder="Enter a Username" />
        </div>
        <div className="input-field">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter a Password" name="" id="" />
        </div>
        <button className="button" type="submit">
          Leggo! <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
        </button>
      </form>
    </div>
  );
};