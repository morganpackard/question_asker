import React, { Component } from 'react'; import DisplayQuestion from './DisplayQuestion';
import AdvanceButton from './AdvanceButton';
import './App.css';
import QuestionInput from './QuestionInput';

class App extends Component {

	constructor() {
        super();
        this.state = {
            questions: [
                "What is the meaning of pizza?",
                "Why should I wiggle?"
            ],
            questionIndex: 0
        };
	}
	
	advanceQuestion(){
		this.setState(
            Object.assign(
                {}, 
                this.state, 
                {
                    questionIndex: this.state.questionIndex +1 % this.state.questions.length
                } 
            )
        );
		
	}

    getCurrentQuestion(){
        return this.state.questions[this.state.questionIndex % this.state.questions.length];
    }

    render() {
        return (
            <div className="App">
                <div style={{float: "left"}} >
                    <QuestionInput questions={this.state.questions}/>
                </div>
                <DisplayQuestion question={this.getCurrentQuestion()}/>
                <AdvanceButton advance={this.advanceQuestion.bind(this)}/>
            </div>
        );
    }
}

export default App;
