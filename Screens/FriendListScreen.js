import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { Container, Content } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';

import BusinessCell from '../Components/BusinessCell'
import PremiumCell from '../Components/PremiumCell'
import FeedCell from '../Components/FeedCell'
import PartnerCell from '../Components/PartnerCell';
import FriendCell from '../Components/FriendCell';

class FriendListScreen extends Component {


    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#E14437',
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: '18'
        },
        title : "Friend List",
        headerTintColor: 'white',
        


    }

    render() {
        return (
            <Container>
                <Content>
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 10,
        borderRadius: 4,
        height: 96,
        width: null,
        alignItems: 'center',
    }
})

export default FriendListScreen;