import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import RootStackComponent from './Routers/RootStack'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import userReducer from './redux/reducers/userReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'
import { getStatusBarHeight } from 'react-native-status-bar-height'

/* ===========================
	 Redux Store
	 manage reducer
	 manage middleware     
============================*/
const store = createStore(
	combineReducers({ userReducer }),
	composeWithDevTools(applyMiddleware(thunk))
)

export default () => {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<RootStackComponent />
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: getStatusBarHeight()
	}
})

// import HomeScreen from './Screens/HomeScreen'
// import TestScreen from './Screens/TestScreen'
// import ProjectScreen from './Screens/ProjectListScreen'
// import MessagesScreen from './Screens/MessagesScreen'

// export default class App extends React.Component {
//   render() {
//     return (
//         <MainTabNavigator/>
//     );
//   }
// }

// const MainTabNavigator = TabNavigator({

//   HomeScreen: {screen : HomeScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: "Home",
//       tabBarIcon: () => (
//         <Image
//           source={require('./assets/home.png')}
//           style={{width:20, height:22, tintColor: 'black'}}
//         />
//       )
//     })},
//   MessagesScreen : {screen : MessagesScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: "Messages",
//       tabBarIcon: () => (
//         <Image
//           source={require('./assets/message.png')}
//           style={{width:24, height:20, tintColor: 'black'}}
//         />
//       )
//     })
//   },
//   },
//   {
//     animationEnabled: true,
//     swipeEnabled: true

//   })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
