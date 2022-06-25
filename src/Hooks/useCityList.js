import { useEffect, useReducer } from "react";

const initialState = {
  cityesList: JSON.parse(localStorage.getItem("cityesList")) || [],
};

const reduser = (state, action) => {
  switch (action.type) {
    case "ADD_CITY": {
      const newState = {
        ...state,
        cityesList: [...state.cityesList, action.payload],
      };
      return newState;
    }
    case "DEL_CITY": {
      const oldArray = state.cityesList;
      const newArray = oldArray.filter((el) => el !== action.payload);
      return { ...state, cityesList: newArray };
    }

    default:
      return initialState;
  }
};

export const useCityList = () => {
  const [state, dispatch] = useReducer(reduser, initialState);
  const { cityesList } = state;

  useEffect(() => {
    localStorage.setItem("cityesList", JSON.stringify(cityesList));
  }, [cityesList]);
  return [cityesList, dispatch];
};
