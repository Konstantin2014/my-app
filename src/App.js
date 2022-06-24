import { useState } from "react";

import "./App.css";

import { Input } from "./Input/input";
import { Card } from "./Card/card";

function App() {
  const [cityesList, setCityesList] = useState([]);

  return (
    <div className="Main">
      <Input setCityesList={setCityesList} />
      <div className="CardList">
        {cityesList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
