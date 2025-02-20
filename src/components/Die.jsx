// eslint-disable-next-line react/prop-types
const Die = ({value, isHeld, onClick}) => {

  return (
    <button onClick={onClick} className={isHeld ? "h-4 w-4 p-5 bg-green-400 border-1 border-gray-100 rounded-lg shadow-md flex justify-center items-center font-bold cursor-pointer text-2xl duration-100 hover:outline-3 outline-gray-400" : 
      "h-4 w-4 p-5 border-1  border-gray-100 rounded-lg shadow-md flex justify-center items-center font-bold cursor-pointer text-2xl duration-100 hover:outline-3 outline-gray-400"
    }>
      {value}
    </button>
  )
}

export default Die;