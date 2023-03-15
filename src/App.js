import React from "react";
import { useState } from "react";
import {nanoid} from "nanoid";
import './index.css';
import Die from "./Die";



function App() {

  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random()*6), 
      isHeld: false,
      id: nanoid()
    }
  }   

  const allNewDice = () => {
    const diceArray = [];
    for (let i=0; i<10; i++) {
      diceArray.push(generateNewDie())
    }
    return diceArray;
    }
  
  const [dice, setDice] = useState(allNewDice());

  const holdDice = (id) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
      {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  const rollDice = () => {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld === true ?
      die : generateNewDie()
    }))
  }
  
  const dieElements = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} holdDice={() => holdDice(die.id)}/>
    ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same.  Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-container">
          {dieElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
  }

export default App;