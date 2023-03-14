import React from "react";
import { useState } from "react";
import './index.css';
import Die from "./Die";



function App() {
  const allNewDice = () => {
    const diceArray = [];
    for (let i=0; i<10; i++) {
      diceArray.push(Math.ceil(Math.random()*6))
    }
    return diceArray;
    }

  const [dice, setDice] = useState(allNewDice());

  const dieElements = dice.map(die => <Die value={die} />);

  const rollDice = () => {
    setDice(allNewDice());
  }

  return (
    <main>
      {/* <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same.  Click each die to freeze it at its current value between rolls.
      </p> */}
      <div className="dice-container">
          {dieElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
  }

export default App;