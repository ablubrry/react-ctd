// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';

export default function BugMutatedState() {
  const [count, setCount] = useState(0); // Changed 'let' to 'const' as best practice

  function handleAdd() {
    setCount(count + 1); // Directly pass the new value to the setter
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The issue with this component is that the `count` state is being mutated directly, 
// which can lead to unexpected behavior. In React, state should be treated as immutable. 
// nstead of modifying the state directly, we should use the `setCount` function to update the state.