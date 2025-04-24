import React, { useState, useEffect } from 'react';

const AdvancedUseEffectDemo = () => {
  // State for different demonstrations
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect for data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  // Effect for window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Effect for timer
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }

    // Cleanup function to clear interval
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // Runs when isRunning changes

  // Effect for document title
  useEffect(() => {
    document.title = `Timer: ${timer} | UseEffect Demo`;
  }, [timer]); // Updates title when timer changes

  // Toggle timer
  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold mb-4">Advanced useEffect Demo</h1>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold">Data Fetching</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {data && (
          <div>
            <p>Todo Title: {data.title}</p>
            <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold">Window Width</h2>
        <p>Current Width: {windowWidth}px</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold">Timer</h2>
        <p className="text-xl mb-4">Time: {timer} seconds</p>
        <div className="flex space-x-2">
          <button 
            onClick={toggleTimer} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button 
            onClick={resetTimer} 
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedUseEffectDemo;