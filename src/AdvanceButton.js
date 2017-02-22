import React, { Component } from 'react';

class AdvanceButton extends Component {
  render() {
    return (
      <div className="" onClick={()=>{this.props.advance()}}>click to advance</div>
    );
  }
}

export default AdvanceButton;
