'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var Card = React.createClass({
  render: function() {
    return(
      <View style={styles.card}>
        <Text>I am a card</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  card: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50D2C2',
    width: 200,
    height: 200
  }
});

module.exports = Card;
