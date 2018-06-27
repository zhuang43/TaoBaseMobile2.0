import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './Screens/HomeScreen'
import TestScreen from './Screens/TestScreen'
import ProjectScreen from './Screens/ProjectListScreen'
import MessagesScreen from './Screens/MessagesScreen'

export default class App extends React.Component {
  render() {
    return (
        <MainTabNavigator/>
    );
  }
}

const MainTabNavigator = TabNavigator({

  HomeScreen: {screen : HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      tabBarIcon: () => (
        <Image
          source={require('./assets/home.png')}
          style={{width:20, height:22, tintColor: 'black'}}
        />
      )
    })},
  MessagesScreen : {screen : MessagesScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Messages",
      tabBarIcon: () => (
        <Image
          source={require('./assets/message.png')}
          style={{width:24, height:20, tintColor: 'black'}}
        />
      )
    })
  },
  },
  {
    animationEnabled: true,
    swipeEnabled: true
    
  })



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
