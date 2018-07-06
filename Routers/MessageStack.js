import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import MessagesScreen from '../Screens/MessagesScreen'
import FriendListScreen from '../Screens/FriendListScreen'

const MessageStack = StackNavigator(
	{
		MessagesScreen: { screen: MessagesScreen },
		FriendListScreen: { screen: FriendListScreen }
	},
	{
		navigationOptions: () => {
			return {
				header: () => null
			}
		}
	}
)

export default () => <MessageStack />
