import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

import ProjectListScreen from '../Screens/ProjectListScreen'
import BUsinessListScreen from '../Screens/BusinessListScreen'
import HomeScreen from '../Screens/HomeScreen'


class HomeMenuCell extends Component {

    render() {
        return (
            
            <Card style={{ flexDirection: 'column', justifyContent: 'space-between', borderRadius: 20}}>
                <CardItem styles={{ felx: 1, height: 90, paddingTop: 20 }}>
                    <Left style={{ justifyContent: 'space-between', marginHorizontal: -35 }}>

                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity transparent>
                                <Image source={require('../assets/topic.png')} style={{ height: 62, width: 62 }} />
                            </TouchableOpacity>
                            <Text style={{}}>Hot Topic</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity transparent>
                                <Image source={require('../assets/partner.png')} style={{ height: 62, width: 62 }} />
                            </TouchableOpacity>
                            <Text style={{}}>Find Partners</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity transparent onPress={()=>this.props.navigation.navigate('BusinessListScreen')}>
                                <Image source={require('../assets/cloud.png')} style={{ height: 62, width: 62 }} />
                            </TouchableOpacity>
                            <Text style={{}}>Find Business</Text>
                        </View>

                    </Left>
                </CardItem>

                <CardItem styles={{ flex: 1, height: 90, paddingTop: 20 }}>
                    <Left style={{ marginHorizontal: -35, justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProjectListScreen')}>
                                <Image source={require('../assets/search.png')} style={{ height: 62, width: 62 }} />
                            </TouchableOpacity>
                            <Text style={{}}>Find Projects</Text>
                        </View>
                        
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity transparent>
                                <Image source={require('../assets/calender.png')} style={{ height: 62, width: 62 }} />
                            </TouchableOpacity>
                            <Text style={{}}>Events Calender</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <TouchableOpacity transparent>
                                <Image source={require('../assets/light-bulb.png')} style={{ height: 62, width: 62 }} />
                            </TouchableOpacity>
                            <Text style={{}}>Media & Blogs</Text>
                        </View>io
                    </Left>
                </CardItem>
            </Card>
        );
    }
}
/*
<Image source={require('../assets/partner.png')} style={{height: 62, width: 62}}/>
<Image source={require('../assets/cloud.png')} style={{height: 62, width: 62}}/>
<Image source={require('../assets/search.png')} style={{height: 62, width: 62}}/>
<Image source={require('../assets/calender.png')} style={{height: 62, width: 62}}/>
<Image source={require('../assets/light-bulb.png')} style={{height: 62, width: 62}}/> 
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 4,
        height: 215,
        width: null,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 23
    }
})

export default HomeMenuCell;