import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Container, Content } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';

import BusinessCell from '../Components/BusinessCell'
import PremiumCell from '../Components/PremiumCell'
import FeedCell from '../Components/FeedCell'

import HomeScreen from '../Screens/HomeScreen'

class ProjectDetailScreen extends Component {


    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#E14437',
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: '18'
        },
        headerRight:
            <TouchableOpacity
                style={{ width: 28, height: 28, right: 10, alignItems: 'center' }}
                onPress={() => HomeScreen.props.navigation.navigate('ProfileScreen')}>
                <Image source={require('../assets/alice.png')} style={{ height: 28, width: 28, borderWidth: 1, borderColor: '#fff', borderRadius: 14 }} />>
            </TouchableOpacity>,
        headerTintColor: 'white',


    }

    render() {
        return (
            <Container>
                <Content>

                    <PremiumCell />

                </Content>
            </Container>
        );
    }
}

export default ProjectDetailScreen;