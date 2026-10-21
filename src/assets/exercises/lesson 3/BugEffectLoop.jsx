//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  // This component uses useState and useEffect to update a value.
  // The effect is running on every render, which causes the
  // component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount((prevCount) => prevCount + 1);
  }, []); 

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The dependency array is missing in the useEffect hook, 
// which causes the effect to run on every render. This creates an infinite 
// loop of state updates and re-renders. To fix this, 
// we should add an empty dependency array to the useEffect 
// hook so that it only runs once after the initial render.