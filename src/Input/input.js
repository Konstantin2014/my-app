import React from "react";
import "./input.css";

export const Input = () => {
  return (
    <div className="CityName">
      <input className="CityNameInput"></input>
      <button className="CityNameAdd" type="button">
        Додати
      </button>
    </div>
  );
};
