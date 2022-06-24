import { useState, useEffect } from "react";

export const useCityList = () => {
  const [cityesList, setCityesList] = useState(
    JSON.parse(localStorage.getItem("cityesList")) || []
  );
  useEffect(() => {
    localStorage.setItem("cityesList", JSON.stringify(cityesList));
  }, [cityesList]);
  return [cityesList, setCityesList];
};
