import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Container, Content } from 'native-base'

class FeaturedUserCell extends Component {

    render() {
        return (
            <Card>
                <View>
                    <View style={{ paddingTop: 5, paddingBottom:5, justifyContent: 'space-between', flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
                        <Text>Featured Stars</Text>
                        <Text>View All</Text>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'row', paddingBottom: 10}}>
                        <ScrollView horizontal={true} contentContainerStyle={{ alignItems: 'center', marginHorizontal: 12 }}>
                            <TouchableOpacity style={{ paddingRight: 20 }}>
                                <Image source={require('../assets/allen.png')} style={{ height: 60, width: 60 }} />
                            </TouchableOpacity >
                            <TouchableOpacity style={{ paddingRight: 20 }}>
                                <Image source={require('../assets/allen.png')} style={{ height: 60, width: 60 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingRight: 20 }}>
                                <Image source={require('../assets/allen.png')} style={{ height: 60, width: 60 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight: 20}}>
                                <Image source={require('../assets/allen.png')} style={{ height: 60, width: 60 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight: 20}}>
                                <Image source={require('../assets/allen.png')} style={{ height: 60, width: 60 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight: 20}}>
                                <Image source={require('../assets/allen.png')} style={{ height: 60, width: 60 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight: 20}}>
                                <Image source={require('../assets/allen.png')} style={{ height: 60, width: 60 }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../assets/allen.png')} style={{ height: 60, width: 60 }} />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Card>
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

export default FeaturedUserCell;