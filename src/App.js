import React, { Component } from 'react'; import DisplayQuestion from './DisplayQuestion';
import AdvanceButton from './AdvanceButton';
import './App.css';
import * as firebase from 'firebase';


// Make sure you swap this out with your Firebase app's config
const config = {
  apiKey: "AIzaSyChEVVj5XU2s_c19MeieVPv7QkJPcF9Z_k",
  authDomain: "dismisinfo-ocr.firebaseapp.com",
  databaseURL: "https://dismisinfo-ocr.firebaseio.com",
  storageBucket: "dismisinfo-ocr.appspot.com",
  messagingSenderId: "252633623620"
};

const fb = firebase  
  .initializeApp(config)
  .database()
  .ref();

class App extends Component {

	constructor() {
        super();
        fb.on('value', snapshot => {  
          const store = snapshot.val();
          this.setState({
            questions: store.questions
          });
        });
        this.state = {
            questions: [
                "What is the meaning of pizza?",
                "Why should I wiggle?"
            ],
            questionIndex: 0,
            number: 0

        };
      this.setQuestions = this.setQuestions.bind(this);
  }
	
	advanceQuestion = ()=>{
      console.log("advance");
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

    setQuestions(questions){
      this.setState({questions: questions});
    }
  
    render() {
        return (
            <div className="App">
                <DisplayQuestion question={this.getCurrentQuestion()}/>
                <AdvanceButton advance={this.advanceQuestion}/>
            </div>
        );
    }
}

export default App;
