import React, { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  label: string;
  duration?: number; // tempo da animação em segundos
}

const Counter: React.FC<CounterProps> = ({ end, label, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60 updates por segundo
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <div className="counter">
      <span className="count">{count}</span>
      <p className="label">{label}</p>
    </div>
  );
};

export default Counter;
