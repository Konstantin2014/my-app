import React from "react";

import "./App.css";

import { Input } from "./Input/input";
import { CardList } from "./CardList/cardList";
import { useCityList } from "./Hooks/useCityList";

function App() {
  const [cityesList, dispatch] = useCityList();

  return (
    <div className="Main">
      <Input dispatch={dispatch} />
      <CardList cityesList={cityesList} dispatch={dispatch} />
    </div>
  );
}

export default App;
