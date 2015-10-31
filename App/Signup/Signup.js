'use strict';

var React = require('react-native');
var Main = require('../Main/Main');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var Signup = React.createClass({
  signup: function(){
    this.props.navigator.push({
            name: 'Main',
            component: Main
          });
  },
  render: function() {
    return(
      <View style={styles.container}>
        <Text>I am the Signup page</Text>
        <TouchableHighlight onPress={this.signup}>
          <Text>Go to the main page</Text>
        </TouchableHighlight>
      </View>
    )
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

module.exports = Signup;
