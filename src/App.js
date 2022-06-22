import "./App.css";

import { Input } from "./Input/input";
import { Card } from "./Card/card";

function App() {
  return (
    <div className="Main">
      <Input />
      <div className="CardList">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
