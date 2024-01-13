import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const res = [];
    for (let x = 0; x < 10; x++) {
      res.push({
        value: Math.floor(Math.random() * 5) + 1,
        isHeld: true,
        id: nanoid(),
      });
    }
    return res;
  }

  const diceElements = dice.map((die) => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} />;
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
