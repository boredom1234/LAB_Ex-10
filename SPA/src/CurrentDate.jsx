import React, { Component } from 'react';

class CurrentDate extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date() // Initialize the state with the current date and time
    };
  }

  componentDidMount() {
    // Update the date every second (optional)
    this.interval = setInterval(() => {
      this.setState({
        currentDate: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted (optional)
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>- Inquiry Date and Time: {this.state.currentDate.toLocaleString()}</h1>
        <p></p>
      </div>
    );
  }
}

export default CurrentDate;
