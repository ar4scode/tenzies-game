import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons';
import { faDiceThree } from '@fortawesome/free-solid-svg-icons';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';
import { faDiceFive} from '@fortawesome/free-solid-svg-icons';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line react/prop-types
const Die = ({value, isHeld, onClick}) => {
  let diceImage;

  switch(value) {
    case 1 :
      diceImage = <FontAwesomeIcon className='text-gray-600 text-5xl' icon={faDiceOne} />
      break
    case 2:
      diceImage = <FontAwesomeIcon className='text-gray-600 text-5xl' icon={faDiceTwo} />
      break
    case 3:
      diceImage = <FontAwesomeIcon className='text-gray-600 text-5xl' icon={faDiceThree} />
      break
    case 4: 
      diceImage = <FontAwesomeIcon className='text-gray-600 text-5xl' icon={faDiceFour} />
      break
    case 5: 
      diceImage = <FontAwesomeIcon className='text-gray-600 text-5xl' icon={faDiceFive} />
      break
    case 6: 
      diceImage = <FontAwesomeIcon className='text-gray-600 text-5xl' icon={faDiceSix} />
  }

  return (
    <button onClick={onClick} className={isHeld ? "h-4 w-4 p-5 bg-green-400 border-1 border-gray-100 rounded-lg shadow-lg flex justify-center items-center font-bold cursor-pointer text-2xl duration-100 hover:outline-3 outline-gray-400" : 
      "h-4 w-4 p-5 border-1  border-gray-100 rounded-lg shadow-lg flex justify-center items-center font-bold cursor-pointer text-2xl duration-100 hover:outline-3 outline-gray-400"
    }>
      {diceImage}
    </button>
  )
}

export default Die;