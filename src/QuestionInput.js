import React, { Component } from 'react';
import './QuestionInput.css';

class QuestionInput extends Component {

    constructor(props){
      super(props);
      const questionString = this.props.questions.reduce((initial, question)=>{
            return initial + question + "\n";
        }, "");
      this.state = {questionString: questionString };
      this.update = this.update.bind(this);
    }

    update(e){
     const formVal = e.target.value;
      this.setState({questionString: formVal});
      this.props.setQuestions(formVal.split("\n"));
    }

    render() {
        
        return (
            <div >
                <textarea
                    rows="10"
                    cols="10"
                    className="QuestionInput"
                    value={this.state.questionString}
                    onChange={this.update}
                />
            </div>
        );
    }
}

export default QuestionInput 
