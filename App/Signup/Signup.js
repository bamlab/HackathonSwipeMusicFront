'use strict';

var React = require('react-native');
var Main = require('../Main/Main');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} = React;

var Signup = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      artist: ''
    }
  },
  signup: function(){
    if (!this.state.username || !this.state.artist){
      console.log('Missing username or artist. Current username: ' + this.state.username + '\nCurrent artist' + this.state.artist)
    } else {
      this.props.navigator.push({
              name: 'Main',
              component: Main
      });
    }
  },
  render: function() {
    return(
      <View style={styles.container}>
        <Text>Username:</Text>
        <TextInput
            style={styles.formInput}
            onChangeText={(text) => this.setState({username: text})}
          />
        <Text>What artist do you feel like hearing today?</Text>
        <TextInput
            style={styles.formInput}
            onChangeText={(text) => this.setState({artist: text})}
          />
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
