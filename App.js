import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import quizService from './quizService/index';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };
  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question,
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        <View style={styles.title}>
          <Text style={{color: 'white'}}>QuizBee</Text>
        </View>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({question, answers, correct, questionId}) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={answer => this.computeAnswer(answer, correct)}
              />
            ),
          )}

        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: 'solid',
    borderRadius: 4,  
    padding: 10,
    top : 10,
    bottom : 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  title: {
    position: 'relative',
    backgroundColor: 'black',
    padding: 20,
    fontSize: 1.8,
    borderRadius: 5,
  }
})

export default App;
