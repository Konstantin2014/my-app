import { useState, useRef } from "react";
import "./input.css";

export const Input = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    if (inputValue.length) {
      dispatch({
        type: "ADD_CITY",
        payload: inputValue,
      });
    }
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
