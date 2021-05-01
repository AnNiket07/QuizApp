import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const Result = ({score, playAgain}) => (
  <View style={styles.scoreBoard}>
    <View>
      <Text style={styles.score}>You scored {score}/5 correct answers!</Text>
    </View>
    <View style={styles.playBtn}>
      <Button
        onPress={playAgain}
        color="limegreen"
        title="Play Again!"></Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scoreBoard: {
    marginTop: 30,
    position: 'relative',
    height: 400,
    borderStyle: 'solid',
    borderColor : 'black',
    borderWidth : 1.5,
    shadowColor:'grey',
  },
  score: {
    position: 'absolute',
    fontSize: 21,
    top: 100,
    alignSelf: 'center',
  },
  playBtn: {
    position: 'absolute',
    padding: 20,
    top: 200,
    width: 310,
    margin: 'auto',
    alignSelf: 'center',
  },
});

export default Result;
