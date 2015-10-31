'use strict'

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = React;
var Card = require('./Components/Card');
var AudioPlayer = require('react-native-audio-manager');

var Main = React.createClass({
  playMusic: function() {
    AudioPlayer.play('http://d318706lgtcm8e.cloudfront.net/mp3-preview/f454c8224828e21fa146af84916fd22cb89cedc6');
  },

  stopMusic: function() {
    AudioPlayer.stop('http://d318706lgtcm8e.cloudfront.net/mp3-preview/f454c8224828e21fa146af84916fd22cb89cedc6');
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Music Tinder!
        </Text>
        <Text style={styles.mooText} onPress={this.playMusic}>
          Play
        </Text>
        <Text style={styles.mooText} onPress={this.stopMusic}>
          Stop
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
