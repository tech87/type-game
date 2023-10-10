import './App.css'
import React, { useState, useEffect, useRef } from "react";

function App() {
  const STARTING_TIME = 30;

  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimerStarted, setIsTimerStarted] = useState("");
  const [text, setText] = useState("");
  const [wordsLength, setWordsLength] = useState(0);
  const textRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const numberOfWords = text.trim().split(" ");
    return numberOfWords.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimerStarted(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    setWordsLength(0);
    textRef.current.disabled = false;
    textRef.current.focus();
  }

  useEffect(() => {
    function endGame() {
      setIsTimerStarted(false);
      setWordsLength(countWords(text));
    }
    if (isTimerStarted && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimerStarted, text]);

  return (
    <div className="w-80 h-72 flex flex-col justify-center items-center px-8 md:w-96 md:h-80 lg:w-1/2 lg:h-2/3">
      <h1 className="text-amber-700 text-2xl font-semibold mb-4 text-main-color lg:text-3xl">How fast do you type?</h1>
      <textarea className='mb-4 rounded-md bg-secondary h-24 shadow-3xl outline-none w-full p-2 lg:h-32'
        disabled={!isTimerStarted}
        value={text}
        onChange={handleChange}
        ref={textRef}
      />
        <h3 className="text-color text-base font-semibold mb-4 text-main-color lg:text-lg">Time remaining: {timeRemaining}</h3>
        <button disabled={isTimerStarted} onClick={startGame} className='bg-primary text-base 
        font-semibold rounded-md py-1 px-3 mb-4 shadow-2xl text-main-color hover:scale-110 disabled:cursor-not-allowed
        lg:py-2 lg:px-8 lg:text-lg'>
          Start
        </button>
        <h2 className="text-color text-xl font-semibold text-main-color lg:text-2xl">Word count: {wordsLength}</h2>
    </div>
  );
}

export default App;
