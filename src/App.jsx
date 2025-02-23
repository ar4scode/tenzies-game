import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import RollButton from './components/RollButton';
import { nanoid } from 'nanoid';

function App() {
  const [diceNumbers, setDiceNumbers] = useState(generateAllNewDice());

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
    setDiceNumbers(prevDice => 
      prevDice.map((die) => 
        die.isHeld ? die : {...die, values: Math.ceil(Math.random() * 6)}
      )
    )
  }

  const holdDice = (id) => {
    setDiceNumbers((prevDice) =>
      prevDice.map((die) => 
        die.id === id ? { ...die, isHeld: !die.isHeld} : die
      )
    );
  }


  // const updateDice = () => {
  //   setDiceNumbers(prevDice => {
  //     prevDice.map((die) => {
  //       die.isHeld ? die : {...die, values: Math.ceil(Math.random() * 6)}
  //     })
  //   })
  // }

  return (
    <>
      <main className="bg-white rounded-lg h-full flex flex-col justify-evenly items-center">
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
        <RollButton onClick={rollDice} />
      </main>
    </>
  );
}

export default App;
