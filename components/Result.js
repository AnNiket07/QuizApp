import React from 'react';
import {Button, View} from 'react-native';

const Result = ({score, playAgain}) => (
  <View className="score-board">
    <View className="score">
      <Text>You scored {score}/5 correct answers!</Text>
    </View>
    <Button className="playBtn" onClick={playAgain}>
      Play Again!
    </Button>
  </View>
);

export default Result;
