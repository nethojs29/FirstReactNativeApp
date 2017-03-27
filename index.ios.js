/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

class Joke extends Component {
    constructor(props){
        super(props);
        this.state = {joke: ''};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 24, margin: 20, textAlign: 'center'}}>{"Chuck Norris Jokes because fuck lol"}</Text>
                <Text style={styles.welcome}>{this.state.joke}</Text>
                <Button
                    onPress={this.getRandomJoke}
                    title= "New Joke"
                    color="#009999"
                />
            </View>

        );
    }

    getRandomJoke = () => {
    return fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({joke:responseJson.value});
        }).catch((err) => {
            console.log(err);
        })
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ChuckNorrisJokes', () => Joke);
