import React from "react";
import "./cardList.css";
import { Card } from "../Card/card";

export const CardList = ({ cityesList }) => (
  <div className="CardList">
    {cityesList.map((city) => (
      <Card key={city} city={city} />
    ))}
  </div>
);
