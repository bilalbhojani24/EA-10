import React from 'react';
import Button from './Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      greeting: 'Hello, Welcome to counter application',
    };
    this.increement = this.increement.bind(this); // recommend
    this.updateGreeting = this.updateGreeting.bind(this); // recommend
  }

  increement() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decreement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  updateGreeting() {
    this.setState({
      greeting: `Hello, ${
        this.state.counter > 0 ? 'Positive Number' : 'Negative Number'
      }`,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <p>{this.state.counter}</p>
        <Button buttonText="Increement" btnClick={this.increement} />
        <Button buttonText="Decreement" btnClick={() => this.decreement()} />
        <Button buttonText="Update" btnClick={this.updateGreeting} />
      </div>
    );
  }
}

export default Counter;

// to use variable / functions / object => this.variableName / this.functionName
// to use props => this.props.propName
// to use state => this.state.stateName
