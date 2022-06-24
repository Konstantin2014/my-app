import { useWeather } from "../Hooks/useWeather";
import "./card.css";

export const Card = ({ city }) => {
  const data = useWeather(city);
  if (!data) {
    return null;
  }

  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  return (
    <div className="Card">
      <div className="CardInfo">
        <img
          className="CardIcon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <p className="CardCity">{name}</p>
        <p className="CardDescription">{description}</p>
        <p className="CardTemperature">{temp.toFixed()}</p>
      </div>
      <ul className="CardItem">
        <li className="CardHumidity">Вологість повітря : {humidity}</li>
        <li className="CardFeelsLike">Відчувається, як : {feels_like}</li>
      </ul>
    </div>
  );
};
