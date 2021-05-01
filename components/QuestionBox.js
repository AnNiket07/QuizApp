import React, {useState} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <View style={styles.questionBox}>
      <View style={styles.question}>
        <Text>{question}</Text>
      </View>
      {answer.map((text, index) => (
        <Button
          key={index}
          style={styles.answerBtn}
          color="orange"
          onPress={() => {
            setAnswer([text]);
            selected(text);
          }}
          title={text}></Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    fontSize: 1.2,
    fontWeight: 'bold' ,
    marginBottom: 5,
  },
  questionBox: {
    position: 'relative',
    borderWidth: 1,
    borderColor: "black",
    borderStyle: 'solid',
    marginTop: 5,
    padding: 15,
    backgroundColor: "white",
  },
  answerBtn: {
    position: 'relative',
    padding: 10,
    display: 'flex',
    margin: 10,
    fontSize: 1,
    fontWeight: 'bold',
    borderRadius: 4,
  }
  
})

export default QuestionBox;
