import { useEffect, useRef, useState } from 'react';
import './App.css';
import Die from './components/Die';
import RollButton from './components/RollButton';
import Header from './components/Header';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
import Timer from './components/Timer'

function App() {
  const [diceNumbers, setDiceNumbers] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null)
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)

  const gameWon = diceNumbers.every(die => die.isHeld) && diceNumbers.every(die => die.values === diceNumbers[0].values)

  useEffect(() => {
    if(gameWon) {
      buttonRef.current.focus()
      clearInterval(intervalRef.current)
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
      setStartTime(prevStartTime => {
        if(prevStartTime === null) {
          clearInterval(intervalRef.current)
          intervalRef.current = setInterval(() => {
            setNow(Date.now())
          }, 20)
          return(Date.now())
        }
        return prevStartTime
      })
    } else {
      setDiceNumbers(generateAllNewDice())
      setStartTime(null)
      clearInterval(intervalRef.current)
    }
  }

  const holdDice = (id) => {
    setDiceNumbers((prevDice) =>
      prevDice.map((die) => 
        die.id === id ? { ...die, isHeld: !die.isHeld} : die
      )
    );

    setStartTime(prevStartTime => {
      if(prevStartTime === null) {
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
          setNow(Date.now())
        }, 20)
        return(Date.now())
      }
      return prevStartTime
    })
  }


  return (
    <>
      <main className="bg-white rounded-lg h-full flex flex-col justify-evenly items-center">
        {gameWon && <Confetti />}
        <Header />
        <Timer startTime={startTime} now={now} />
        {gameWon && <h2 className='text-green-600 font-semibold'>Game Won</h2>}
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
