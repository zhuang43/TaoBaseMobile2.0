import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { Container, Content } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';

import BusinessCell from '../Components/BusinessCell'
import PremiumCell from '../Components/PremiumCell'
import FeedCell from '../Components/FeedCell'
import PartnerCell from '../Components/PartnerCell';

class PartnerListScreen extends Component {


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
                    <Text style={{ color: '#777', top: 5, left:3}}>People you may want to know</Text>

                    <PartnerCell />
                    <PartnerCell />
                    <PartnerCell />
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

export default PartnerListScreen;