import React, { Component } from 'react';

class DisplayQuestion extends Component {
  render() {
    return (
      <div className="questionDisplay">{this.props.question}</div>
    );
  }
}

export default DisplayQuestion;
