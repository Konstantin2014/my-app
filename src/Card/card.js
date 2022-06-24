import React from "react";
import "./card.css";

export const Card = ({ city }) => {
  return (
    <div className="Card">
      <div className="CardInfo">
        <img className="CardIcon" src="" alt="icon" />
        <p className="CardCity">{city}</p>
        <p className="CardDescription">Cloudy</p>
        <p className="CardTemperature">20</p>
      </div>
      <ul className="CardItem">
        <li className="CardHumidity">Humidity: 15</li>
        <li className="CardFeelsLike">Feels Like: 19</li>
      </ul>
    </div>
  );
};
