// eslint-disable-next-line react/prop-types
export default function RollButton({onClick}) {
  return (
    <button className="bg-blue-600 px-10 py-2 rounded-lg font-semibold text-white shadow-lg cursor-pointer duration-300 hover:bg-blue-800" onClick={onClick}>Roll</button>
  )
}