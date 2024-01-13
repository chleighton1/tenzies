import { useState } from "react";
import "./App.css";
import Die from "./Die";

function App() {
  function allNewDice() {
    const res = [];
    for (let x = 0; x < 10; x++) {
      res.push(Math.floor(Math.random() * 5) + 1);
    }
    return res;
  }

  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die) => {
    return <Die value={die} />;
  });

  function handleClick() {
    setDice(allNewDice);
  }

  return (
    <main>
      <div className="main-ui">
        <div className="dice--container">{diceElements}</div>
        <button className="roll--btn" onClick={handleClick}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
