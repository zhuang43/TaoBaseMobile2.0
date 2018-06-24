import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen'
import HomeScreen from '../Screens/HomeScreen'
import TestScreen from '../Screens/TestScreen'
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
})



const MainTabNavigator = TabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Home",
                tabBarIcon: () => (
                    <Image
                        source={require('../assets/home.png')}
                        style={{ width: 24, height: 24 }}
                    />
                )

            })
        },
        TestScreen: { screen: TestScreen },
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom'
    }
)

const MainScreen = (props) => {
    return (
        <MainTabNavigator />
    )
}


export default MainScreen