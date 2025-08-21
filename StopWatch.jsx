import { useState, useRef } from "react";

function Stopwatch() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (!intervalRef.current) { 
      intervalRef.current = setInterval(() => {
        setSec((prev) => {
          if (prev+1===60) {
            setMin((m) => m + 0.5);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;  
  }

  function reset() {
    stop();
    setSec(0);
    setMin(0);
  }
    
  return (
    <>
      <div style={{backgroundColor:"blue",width:300,height:150,color:"white"}}>
      <h1>Stopwatch</h1>
      <h2>
        {min}:{sec}
      </h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
          </div>
    </>
  );
}

export default Stopwatch;
