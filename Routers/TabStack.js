import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen'
import HomeScreen from '../Screens/HomeScreen'
import TestScreen from '../Screens/TestScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
// import ProjectListScreen from './ProjectListScreen';
// import BusinessListScreen from './BusinessListScreen'
// import ProfileScreen from './ProfileScreen'
// import UserProfileScreen from './UserProfileScreen'
// import FeedScreen from './FeedScreen'
// import PartnerListScreen from './PartnerListScreen'
// import ProjectDetailScreen from './ProjectDetailScreen'
// import BusinessDetailScreen from './BusinessDetailScreen'
// import FeedDetailScreen from './FeedDetailScreen'


const HomeNavigator = StackNavigator({
    HomeScreen: { screen: HomeScreen }
    // ProjectListScreen: { screen: ProjectListScreen },
    // BusinessListScreen: { screen: BusinessListScreen },
    // ProfileScreen: { screen: ProfileScreen },
    // UserProfileScreen: { screen: UserProfileScreen },
    // FeedScreen: { screen: FeedScreen },
    // PartnerListScreen: { screen: PartnerListScreen },
    // ProjectDetailScreen: { screen: ProjectDetailScreen },
    // BusinessDetailScreen: { screen: BusinessDetailScreen },
    // FeedDetailScreen: { screen: FeedDetailScreen }
}
)

const HomeStackRender = () => {
    return (
        <HomeNavigator />
    )
}


const MainTabNavigator = TabNavigator(
    {
        HomeScreen: {
            screen: HomeStackRender,
            navigationOptions: ({ navigation }) => ({
                title: "Home",
                tabBarIcon: () => <Icon color="white" name="home" size={20} />,
                showIcon: true
            })
        },
        TestScreen: {
            screen: TestScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Test",
                tabBarIcon: () => <Icon color="white" name="home" size={20} />,
                showIcon: true
            })
        },
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                margin: 2,
                fontSize: 10
            }

        }

    },

)

const MainScreen = (props) => {
    return (
        <MainTabNavigator />
    )
}


export default MainScreen