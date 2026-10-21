//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Bug 1 Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Explanation:
// The issue with this component is that the useEffect 
// hook is not being used correctly. In the original code, 
// the effect was running on every render, which caused an 
// infinite loop of updates. To fix this, I can remove the 
// useEffect entirely since I'm only updating the count 
// state when the button is clicked.