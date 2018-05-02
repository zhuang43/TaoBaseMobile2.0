import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Container, Content } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';

import BusinessCell from '../Components/BusinessCell'
import PremiumCell from '../Components/PremiumCell'
import FeedCell from '../Components/FeedCell'

class FeedScreen extends Component {


    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#E14437',
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: '18'
        },
        headerRight:
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#fff', right: 14, paddingVertical: 5, width: Dimensions.get('window').width - 80 }}>
                        <Text style={{ color: '#777' }}>  Search</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingRight: 10 }}>
                    <Image source={require('../assets/filter.png')} style={{ width: 21, height: 21 }} />
                </TouchableOpacity>
            </View>,
        headerTintColor: 'white',


    }

    render() {
        return (
            <Container>
                <Content>
                <FeedCell
                        feeder='Siri Helper'
                        feederNote='Strategic Planning at EBizTie, Inc'
                        feedContent='Compensation at a startup is largely made up of three components: salary, benefits, and equity. What you need to know before you negotiate an offer: http://ga.co/2G40Fue'
                        feedReposts='9952'
                        feedComments='45723'
                        feedLikes='1053425'
                    />
                    <FeedCell
                        feeder='Jingdon'
                        feederNote='Administration'
                        feedContent='Happy Lunar New Year from our TaoBase Family! We wish you and all your loved ones happiness, health and good fortune in this Year of the Dog: www.TaoBase.com'
                        feedReposts='10k'
                        feedComments='21k'
                        feedLikes='132k' />
                    <PremiumCell />
                    <FeedCell
                        feeder='Siri Helper'
                        feederNote='Strategic Planning at EBizTie, Inc'
                        feedContent='Compensation at a startup is largely made up of three components: salary, benefits, and equity. What you need to know before you negotiate an offer: http://ga.co/2G40Fue'
                        feedReposts='14922'
                        feedComments='4723'
                        feedLikes='10525'
                    />
                    <FeedCell
                        feeder='Jingdon'
                        feederNote='Administration'
                        feedContent='Happy Lunar New Year from our TaoBase Family! We wish you and all your loved ones happiness, health and good fortune in this Year of the Dog: www.TaoBase.com'
                        feedReposts='10k'
                        feedComments='21k'
                        feedLikes='132k' />

                </Content>
            </Container>
        );
    }
}

export default FeedScreen;