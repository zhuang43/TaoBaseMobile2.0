import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen'
import TabStack from './TabStack'
// import ProjectListScreen from './ProjectListScreen';
// import BusinessListScreen from './BusinessListScreen'
// import ProfileScreen from './ProfileScreen'
// import UserProfileScreen from './UserProfileScreen'
// import FeedScreen from './FeedScreen'
// import PartnerListScreen from './PartnerListScreen'
// import ProjectDetailScreen from './ProjectDetailScreen'
// import BusinessDetailScreen from './BusinessDetailScreen'
// import FeedDetailScreen from './FeedDetailScreen'


// const HomeNavigator = StackNavigator({
//     HomeScreen: { screen: HomeScreen }
//     // ProjectListScreen: { screen: ProjectListScreen },
//     // BusinessListScreen: { screen: BusinessListScreen },
//     // ProfileScreen: { screen: ProfileScreen },
//     // UserProfileScreen: { screen: UserProfileScreen },
//     // FeedScreen: { screen: FeedScreen },
//     // PartnerListScreen: { screen: PartnerListScreen },
//     // ProjectDetailScreen: { screen: ProjectDetailScreen },
//     // BusinessDetailScreen: { screen: BusinessDetailScreen },
//     // FeedDetailScreen: { screen: FeedDetailScreen }
// })

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





