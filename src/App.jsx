import { useEffect, useRef, useState } from 'react';
import './App.css';
import Die from './components/Die';
import RollButton from './components/RollButton';
import Header from './components/Header';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

function App() {
  const [diceNumbers, setDiceNumbers] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null)

  const gameWon = diceNumbers.every(die => die.isHeld) && diceNumbers.every(die => die.values === diceNumbers[0].values)

  useEffect(() => {
    if(gameWon) {
      buttonRef.current.focus()
    }
  }, [gameWon])

  function generateAllNewDice() {
    let newDices = [];
    for (let index = 1; index < 11; index++) {
      newDices.push({
        values: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDices;
  }

  const rollDice = () => {
    if(!gameWon) {
      setDiceNumbers(prevDice => 
        prevDice.map((die) => 
          die.isHeld ? die : {...die, values: Math.ceil(Math.random() * 6)}
        )
      )
    } else {
      setDiceNumbers(generateAllNewDice())
    }
  }

  const holdDice = (id) => {
    setDiceNumbers((prevDice) =>
      prevDice.map((die) => 
        die.id === id ? { ...die, isHeld: !die.isHeld} : die
      )
    );
  }


  return (
    <>
      <main className="bg-white rounded-lg h-full flex flex-col justify-evenly items-center">
        {gameWon && <Confetti />}
        <Header />
        <div className="grid grid-cols-5 gap-5">
          {diceNumbers.map((die) => (
            <Die
              onClick={() => holdDice(die.id)}
              isHeld={die.isHeld} // Now each die tracks its own state
              key={die.id}
              value={die.values}
            />
          ))}
        </div>
        <RollButton buttonRef={buttonRef} onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </RollButton>
      </main>
    </>
  );
}

export default App;
