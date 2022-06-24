import { useState } from "react";

import "./App.css";

import { Input } from "./Input/input";
import { CardList } from "./CardList/cardList";

function App() {
  const [cityesList, setCityesList] = useState([]);

  return (
    <div className="Main">
      <Input setCityesList={setCityesList} />
      <CardList cityesList={cityesList} />
    </div>
  );
}

export default App;
