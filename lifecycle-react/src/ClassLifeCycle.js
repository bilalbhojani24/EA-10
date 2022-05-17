import React from 'react';

class ClassLifeCycle extends React.Component {
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

  // component mounting
  componentWillMount() {
    console.log('This is componentWillMount lifecycle');
    // Do not perform side effect (api calls, async functions and API CALLS)
  }

  componentDidMount() {
    console.log('This is componentDidMount lifecycle');
    // Perform side effect
  }

  componentWillUnmount() {
    console.log('Unmount');
  }
  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.increement}>Increement</button>
        <button onClick={() => this.decreement()}>Increement</button>
        <button onClick={this.updateGreeting}>Update</button>
      </div>
    );
  }
}

export default ClassLifeCycle;
