// eslint-disable-next-line react/prop-types
const Timer = ({startTime, now}) => {

  let secondsPassed = 0;
  if(startTime != null & now != null) {
    secondsPassed = (now - startTime) / 1000
  }
  return (
    <div className="font-semibold text-2xl">
      {secondsPassed > 0 ? secondsPassed.toFixed(2) : "00:00"}
    </div>
  )
}


export default Timer;