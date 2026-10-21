// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';

export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1); 
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The issue with this component is that it uses the current value of `count` directly 
// in the `setCount` function. This can lead to unexpected behavior if multiple updates 
// are queued, as React may batch state updates. To fix this, we should use the 
// functional form of `setCount`, which takes the previous state as an argument 
// and ensures that we are always working with the most up-to-date value.