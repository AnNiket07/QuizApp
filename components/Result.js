import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const Result = ({score, playAgain}) => (
  <View style={styles.scoreBoard}>
    <View style={styles.score}>
      <Text>You scored {score}/5 correct answers!</Text>
    </View>
    <Button style={styles.playBtn} onPress={playAgain} color="limegreen" title="Play Again!">
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
    fontSize: 7,
    top: 150,
    textAlign: 'center',
  },
  playBtn: {
    position: 'absolute',
    fontSize: 1.4,
    padding: 10,
    marginTop: 150 ,
    width: 110,
    left: 0,
    right: 0,
    margin: 'auto',
  }
})

export default Result;
