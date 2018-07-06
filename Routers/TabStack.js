import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	Dimensions,
	Image,
	ImageBackground,
	ScrollView
} from 'react-native'

import HomeScreen from '../Screens/HomeScreen'
import MessageStack from './MessageStack'
// import UserProfileScreen from '../Screens/UserProfileScreen'

// import FeedScreen from './FeedScreen'
// import PartnerListScreen from './PartnerListScreen'
// import ProjectDetailScreen from './ProjectDetailScreen'
// import BusinessDetailScreen from './BusinessDetailScreen'
// import FeedDetailScreen from './FeedDetailScreen'

const HomeNavigator = StackNavigator({
	HomeScreen: { screen: HomeScreen }
	// UserProfileScreen: { screen: UserProfileScreen }
	// FeedScreen: { screen: FeedScreen },
	// PartnerListScreen: { screen: PartnerListScreen },
	// ProjectDetailScreen: { screen: ProjectDetailScreen },
	// BusinessDetailScreen: { screen: BusinessDetailScreen },
	// FeedDetailScreen: { screen: FeedDetailScreen }
})

const HomeStackRender = () => {
	return <HomeNavigator />
}

const MainTabNavigator = TabNavigator(
	{
		HomeScreen: {
			screen: HomeStackRender,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: ({ tintColor }) => (
					<Text style={{ color: tintColor, fontSize: 10 }}>Home</Text>
				),
				tabBarIcon: () => (
					<Image
						source={require('../assets/home.png')}
						style={{ width: 20, height: 22, tintColor: 'black' }}
					/>
				),
				showIcon: true
			})
		},
		MessagesScreen: {
			screen: MessageStack,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: ({ tintColor }) => (
					<Text style={{ color: tintColor, fontSize: 10 }}>Messages</Text>
				),
				tabBarIcon: () => (
					<Image
						source={require('../assets/message.png')}
						style={{ width: 24, height: 20, tintColor: 'black' }}
					/>
				),
				showIcon: true
			})
		}
	},
	{
		animationEnabled: true,
		swipeEnabled: true,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			showIcon: true,
			activeTintColor: '#A0C3FF',
			inactiveTintColor: '#333',

			style: {
				backgroundColor: '#F7F7F7',
				borderTopWidth: 0.5,
				borderTopColor: '#F7F7F7'
			}
		}
	}
)

const MainScreen = props => {
	return <MainTabNavigator />
}

export default MainScreen
