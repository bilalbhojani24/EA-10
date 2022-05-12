import React from 'react';

const ConditionalOperator = () => {
  const show = true;
  return (
    <>
      <h3>Ternary Opertaor</h3>
      {show ? (
        <React.Fragment>
          <h1>SHOW ME (show = true)</h1>
          <p>I am second element</p>
        </React.Fragment>
      ) : (
        <h1>HIDE ME (show = false)</h1>
      )}
      <br />
      <br />
      <h3>Short Circuit Operator</h3>
      {show && <h1>I am to be displayed</h1>}
    </>
  );
};

export default ConditionalOperator;

{
  /* <></> => React Fragments => is counted as optimization technique*/
}
