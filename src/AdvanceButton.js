import React, { PureComponent } from 'react';

class AdvanceButton extends PureComponent {
  render() {
    console.log("AdvanceButton renderx");
    return (
      <div className="" onClick={()=>{this.props.advance()}}>click to advance</div>
    );
  }
}

export default AdvanceButton;
