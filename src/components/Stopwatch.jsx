import React, { useRef, useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
      
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (

<>
<h2 className="text-3xl font-bold text-center mb-4">StopWatch!!</h2>
<h3 className='text-4xl font-bold text-center mb-8'>{time}</h3>
<div className="flex justify-center gap-4 mb-8">
  <button onClick={startTimer} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
    Start
  </button>
  <button onClick={resetTimer} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
    Reset
  </button>
  <button onClick={stopTimer} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
    Stop
  </button>
</div>
</> 
);
}

export default Stopwatch;

