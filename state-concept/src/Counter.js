import React, { useState } from 'react';

const Counter = () => {
  // ([], {}, '', null, undefined)
  const [counter, setCounter] = useState(0);

  const increement = (brand) => {
    console.log(brand);
    const randomNum = counter + Math.random();
    setCounter(randomNum);
  };

  return (
    <div>
      <p>{counter}</p>
      {/* <button
        onClick={() => {
          const randomNum = counter + Math.random();
          setCounter(randomNum);
        }}
      >
        Increement
      </button> */}
      {/* <button onClick={increement}>Increement</button> */}
      <button onClick={() => increement('PrepBytes')}>Increement</button>
      <button onClick={() => setCounter(counter - 1)}>Decreement</button>
    </div>
  );
};

export default Counter;

// Interview Question
