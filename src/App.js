import React from "react";

import "./App.css";

import { Input } from "./Input/input";
import { CardList } from "./CardList/cardList";
import { useCityList } from "./Hooks/useCityList";

function App() {
  const [cityesList, setCityesList] = useCityList();

  return (
    <div className="Main">
      <Input setCityesList={setCityesList} />
      <CardList cityesList={cityesList} />
    </div>
  );
}

export default App;
