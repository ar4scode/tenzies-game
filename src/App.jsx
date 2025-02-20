import { useState } from 'react'
import './App.css'
import Die from './components/Die'
import RollButton from './RollButton'

function App() {
  const [diceNumbers, setDiceNumbers] = useState(generateAllNewDice())
/*
  const generateRandomInt = () => {
    return Math.floor(Math.random() * 7 + 1)
  }

  let diceArray = []
  for(let index = 1; index < 11; index++) {
    diceArray.push(generateRandomInt())
  }
*/
  function generateAllNewDice()  {
    let newDices = []
    for(let index= 1; index < 11; index++) {
      // we can use Math.ceil() => we don't need add 1 to our random number
      newDices.push(Math.ceil(Math.random() * 6))
    }
    return newDices
  }

  return (
    <>
      <main className='bg-white rounded-lg h-full flex flex-col justify-evenly items-center'>
        <div className='grid grid-cols-5 gap-5'>
          {diceNumbers.map((die, index) => {
            return(<Die key={index} value={die} />)
          })}
        </div>
        <RollButton onClick={() => setDiceNumbers(generateAllNewDice)} />
      </main>
    </>
  )
}

export default App
