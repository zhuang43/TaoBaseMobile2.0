import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native';
import { Container, Content, Title, List } from 'native-base'
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper'

import HomeMenuCell from "../Components/HomeMenuCell"
import FeaturedUserCell from '../Components/FeaturedUserCell';
import FeedCell from '../Components/FeedCell';
import ProjectCell from '../Components/ProjectCell'
import BusinessCell from '../Components/BusinessCell'
import PremiumCell from '../Components/PremiumCell'
import MessageCell from '../Components/MessageCell'

import ProjectListScreen from './ProjectListScreen';
import BusinessListScreen from './BusinessListScreen'
import ProfileScreen from './ProfileScreen'
import UserProfileScreen from './UserProfileScreen'
import FeedScreen from './FeedScreen'
import PartnerListScreen from './PartnerListScreen'
import ProjectDetailScreen from './ProjectDetailScreen'
import BusinessDetailScreen from './BusinessDetailScreen'
import FeedDetailScreen from './FeedDetailScreen'
import FriendListScreen from './FriendListScreen'


class MessagesScreen extends Component {



    componentWillMount() {

    }



    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#E14437',
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: '18'
        },
        title: 'Messages',
        headerRight:
            <TouchableOpacity
                style={{ width: 28, height: 28, right: 10, alignItems: 'center', width: 28 }}
                onPress={() => navigation.navigate('FriendListScreen')}
            >
                <Image source={require('../assets/write.png')} style={{ height: 25, width: 25, }} />>
        </TouchableOpacity>

    })

    render() {
        return (

            <Container>
                <Content>
                    <List style= {{backgroundColor: 'white'}}>
                        <MessageCell
                            username="Roy Huang"
                            message="Wut up dude!"
                        />
                        <MessageCell
                            username="Steve jobs"
                            message="Thanks for messageing me, I've heard that..."
                        />
                        <MessageCell
                            username="Richard"
                            message="Ummm, give me some time.."
                        />
                        <MessageCell
                            username="Berry Allen"
                            message="My name is berry allen and im the fastest m..."
                        />
                        <MessageCell
                            username="Roy Huang"
                            message="Wut up dude!"
                        />
                        <MessageCell
                            username="Steve jobs"
                            message="Thanks for messageing me, I've heard that..."
                        />
                    </List>
                </Content>
            </Container>

        );
    }
}

const MessageNavigator = StackNavigator({
    MessagesScreen: { screen: MessagesScreen },
    ProjectListScreen: { screen: ProjectListScreen },
    BusinessListScreen: { screen: BusinessListScreen },
    ProfileScreen: { screen: ProfileScreen },
    UserProfileScreen: { screen: UserProfileScreen },
    FeedScreen: { screen: FeedScreen },
    PartnerListScreen: { screen: PartnerListScreen },
    ProjectDetailScreen: { screen: ProjectDetailScreen },
    BusinessDetailScreen: { screen: BusinessDetailScreen },
    FeedDetailScreen: { screen: FeedDetailScreen },
    FriendListScreen: { screen: FriendListScreen }

})

export default MessageNavigator;
