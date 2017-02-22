import React, { Component } from 'react';
import './QuestionInput.css';

class QuestionInput extends Component {


    update(formVal){
       this.props.setQuestions(formVal.split("\n"));
    }

    render() {
        const questionString = this.props.questions.reduce((initial, question)=>{
            return initial + question + "\n";
        }, "")
        return (
            <div >
                <textarea
                    rows="10"
                    cols="10"
                    className="QuestionInput"
                    value={questionString}
                    onChange={(event)=>{
                        console.log(event.target.value);
                    }}
                />
            </div>
        );
    }
}

export default QuestionInput 
