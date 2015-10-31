/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Signup = require('./App/Signup/Signup');

var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} = React;


var HackathonSwipeMusicFront = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{name: 'Signup', component: Signup}}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
      />
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
