import React, { useState, useEffect } from 'react';
import '../Counter/Counter.css';

export const Counter = ({ initialCount, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      onCountChange(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      onCountChange(newCount);
      return newCount;
    });
  };

  return (
    <div className="counter-container">
      <button onClick={decrement} className="btn-dcr">
        -
      </button>
      <span className="counter-span">{count}</span>
      <button onClick={increment} className="btn-inc">
        +
      </button>
      кг.
    </div>
  );
};
