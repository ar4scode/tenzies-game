const Die = ({value}) => {
  return (
    <button className="h-4 w-4 p-5 border-1 border-gray-100 rounded-lg shadow-md flex justify-center items-center font-bold cursor-pointer text-2xl">
      {value}
    </button>
  )
}

export default Die;