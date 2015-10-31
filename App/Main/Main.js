'use strict'

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = React;
var Card = require('./Components/Card');
var AudioPlayer = require('react-native-audioplayer');

var Main = React.createClass({
  playMusic: function() {
    AudioPlayer.play('moo.mp3');
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Music Tinder!
        </Text>
        <Text style={styles.mooText} onPress={this.playMusic}>
          Moo
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <Card />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  mooText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#990000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Main;
