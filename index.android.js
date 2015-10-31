/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Main/Main');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;


var HackathonSwipeMusicFront = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Main />
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
});

AppRegistry.registerComponent('HackathonSwipeMusicFront', () => HackathonSwipeMusicFront);
