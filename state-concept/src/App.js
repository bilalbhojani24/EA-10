import React, { useState } from 'react';
import ConditionalOperator from './ConditionalOperator';
import Counter from './Counter';
import './style.css';

const App = () => {
  // This is the area where we can write write any JS logic
  // syntax const [variableName, setVariableName] = useState(initialValue);
  const [color, setColor] = useState('#000077');
  // let color = '#000000';
  const handleColorChange = () => {
    const generateHex = (Math.random() * 1000000).toString().slice(0, 6);
    // color = `#${generateHex}`;
    setColor(`#${generateHex}`);
  };

  return (
    <>
      {/* <div className="color__container" style={{ backgroundColor: color }}>
        <button onClick={handleColorChange}>
          Click me to change Background color
        </button>
      </div>

      <br />
      <br />
      <br />
      <Counter /> */}
      <ConditionalOperator />
    </>
  );
};

export default App;

// document.getElementById().style.background = '' // DOM Manipulation
// Math.random() => 0.18274398733897 * 10000000 => 182743.98733897 => string.slice => 182743
// DOM in reeact => We can use and it will work perfectly fine. But we are not supposed to use.
// Normal JS variable updates are not realtime

// Difference bw JS variable and State
// 1. When State updates component re-renders

// Left Hand (senseless in context taking actions) = state2
// Right Hand = state2
// Brian updated (slap someone) => Virtual DOM
