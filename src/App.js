import React from "react";
import { useState, useEffect } from "react";
import {nanoid} from "nanoid";
import './index.css';
import Die from "./Die";
import Confetti from "react-confetti";



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
  
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const firstDieValue = dice[0].value;
      const allSameValue = dice.every(die => die.value === firstDieValue)
    if (allHeld && allSameValue) 
    {
      setTenzies(true)
      console.log("You win!")
    }
  }, [dice])

  const holdDice = (id) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
      {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  const rollDice = () => {
    if (tenzies) {
      setTenzies(false)
      setDice(allNewDice)
      
    } else {
      setDice(oldDice => oldDice.map(die => {
      return die.isHeld === true ?
      die : generateNewDie()
    }))
    }
  }
  
  const dieElements = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} holdDice={() => holdDice(die.id)}/>
    ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same.  Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-container">
          {dieElements}
      </div>
      <button
        className="roll-dice" 
        onClick={rollDice}
        >
          {tenzies ? "New Game" : "Roll"}
        </button>
    </main>
  )
  }

export default App;