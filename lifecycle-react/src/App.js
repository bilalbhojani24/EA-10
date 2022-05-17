import React, { useState } from 'react';
import ClassLifeCycle from './ClassLifeCycle';

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      LifeCycle Methods
      {toggle ? <ClassLifeCycle /> : 'Another'}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default App;
