// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';
export default function BugProps({ name = 'friend' }) {
  
    const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// The issue with this component is that the `message` 
// variable is not part of the component's state. React 
// does not track changes to regular variables, so when `message` 
// is updated, the component does not re-render to reflect the 
// change. To fix this, we should use the `useState` hook to
//  manage the `message` state, which allows React to track changes and update the UI accordingly.