import { useState, useRef } from "react";
import "./input.css";

export const Input = ({ setCityesList }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setCityesList((currentArray) => [...currentArray, inputValue]);
    setInputValue("");
    inputRef.current.focus();
  };

  return (
    <div className="CityName">
      <input
        className="CityNameInput"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      ></input>
      <button className="CityNameAdd" onClick={handleOnClick}>
        Додати
      </button>
    </div>
  );
};
