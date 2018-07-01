import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import LoginScreen from '../Screens/LoginScreen'
import TabStack from './TabStack'
import { Font } from 'expo'
import { View } from 'react-native'

const RootStack = StackNavigator(
	{
		LoginScreen: { screen: LoginScreen },
		MainTabNavigator: { screen: TabStack }
	},
	{
		initialRouteName: 'MainTabNavigator',
		/* The header config from HomeScreen is now here */
		navigationOptions: () => {
			return {
				header: () => null
			}
		}
	}
)

export default class RootStackComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true
		}
	}
	componentDidMount() {
		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		}).then(() => this.setState({ loading: false }))
	}

	render() {
		if (this.state.loading) return <View />
		return <RootStack />
	}
}
