// import React from 'react';

// const Button = (props) => {
//   let { buttonText = 'Click Me', className = '' } = props;

//   return <button className={`custom__btn ${className}`}>{buttonText}</button>;
// };

// export default Button;

// // To print any variable/props/state value inside JSX it should be surrouned with {} (curly braces)

import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props); // class from blueprint to allocating memory
    this.name = 'Something';
  }

  render() {
    return (
      <button
        className={`custom__btn ${this.props.className}`}
        onClick={() => {
          if (this.props.btnClick) this.props.btnClick();
        }}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
