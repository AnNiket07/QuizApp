import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const Result = ({score, playAgain}) => (
  <View style={styles.scoreBoard}>
    <View style={styles.score}>
      <Text>You scored {score}/5 correct answers!</Text>
    </View>
    <Button className="playBtn" onClick={playAgain}>
      Play Again!
    </Button>
  </View>
);

const styles = StyleSheet.create({
  scoreBoard: {
    position: 'relative',
    height: 700,
  },
  score: {
    position: 'absolute',
    width: 1024,
    fontSize: 3,
    top: 250,
    textAlign: 'center',
  }
})

export default Result;
