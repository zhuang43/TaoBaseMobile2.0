import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './Screens/HomeScreen'
import ProfileScreen from './Screens/ProfileScreen'

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
          style={{width:24, height:24}}
        />
      )
    })},
  ProfileScreen: {screen : ProfileScreen},
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
