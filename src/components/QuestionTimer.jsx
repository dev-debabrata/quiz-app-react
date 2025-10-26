import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let progressColor = "accent-[#9e5ef8]";
  if (mode === "answered") progressColor = "accent-[#f8e59c]";
  if (mode === "correct") progressColor = "accent-[#5af59d]";
  if (mode === "wrong") progressColor = "accent-[#f55a98]";

  return (
    <progress
      max={timeout}
      value={remainingTime}
      className={`w-1/2 h-2 rounded-full bg-[#6a558a] ${progressColor}`}
    />
  );
}
