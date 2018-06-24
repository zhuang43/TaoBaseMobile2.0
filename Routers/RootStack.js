import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen'
import TabStack from './TabStack'

const RootStack = StackNavigator({
    LoginScreen: { screen: LoginScreen },
    MainTabNavigator: { screen: TabStack }
}, {
        initialRouteName: 'LoginScreen',
        /* The header config from HomeScreen is now here */
        navigationOptions: () => {
            return {
                header: () => null
            }
        }
    })


export default RootStack





