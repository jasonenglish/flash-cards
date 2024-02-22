import { useState } from "react";
import Card from "./Card";
import CardManager from "./CardManager";
import "./App.css";

const words = [
  { english: "cat", spanish: "gato" },
  { english: "dog", spanish: "perro" },
];

function App() {
  const [state, setter] = useState(0);

  return (
    <>
      <CardManager collection={words} />
    </>
  );
}

export default App;
