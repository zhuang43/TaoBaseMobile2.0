import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Container, Content } from 'native-base'


class BusinessCell extends Component {

    render() {
        return (
            <Card style={styles.container}>
                <CardItem>
                    <Left>
                        <View style={{ shadowColor: '#000',
                            shadowOffset: {width:0, height:1},
                            shadowOpacity:0.8,
                            shadowRadius: 1,
                            elevation: 1}}>
                        <Image source={require('../assets/company2.png')} style={{ 
                            height: 70, 
                            width: 70, 
                            borderRadius: 3
                             }}/>
                        </View>
                        <Body>
                            <Text style={{ fontWeight: 0.62, fontSize: 16, paddingBottom: 3}}>{this.props.businessName}</Text>
                            <Text style={{ color: '#222', paddingRight: 0, fontSize: 13, paddingBottom: 3 }}>{this.props.businessNote}</Text>
                            <View style={styles.subCardItem}>
                                <Image source={require('../assets/home.png')} style={{ height: 12, width: 11 }} />
                                <Text style={{ paddingLeft: 5, fontSize: 13 }}>{this.props.businessType}</Text>
                            </View>
                            <View style={styles.subCardItem}>
                                <Image source={require('../assets/map-pin.png')} style={{ height: 13, width: 11 }} />
                                <Text style={{ paddingLeft: 5, fontSize: 13 }}>{this.props.businessLocation}</Text>
                            </View>
                            <View style={styles.subCardItem}>
                                <Image source={require('../assets/crosshair.png')} style={{ height: 11, width: 11 }} />
                                <Text style={{ paddingLeft: 5, fontSize: 13 }}>{this.props.businessIndustry}</Text>
                            </View>
                            <View style={styles.subCardItem}>
                                <Image source={require('../assets/people.png')} style={{ height: 12, width: 11 }} />
                                <Text style={{ paddingLeft: 5, fontSize: 13 }}>{this.props.businessSize}</Text>
                            </View>
                            <View style={styles.subCardItem}>
                                <Image source={require('../assets/dollar.png')} style={{ height: 11, width: 11 }} />
                                <Text style={{ paddingLeft: 5, fontSize: 13 }}>{this.props.businessIncome}</Text>
                            </View>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem style={{ borderTopColor: '#ccc', borderTopWidth: 0.5, justifyContent: 'space-between' }}>
                    <View style={{ paddingLeft: Dimensions.get('window').width / 11 }}>
                        <TouchableOpacity style={{ justifyContent: 'flex-start', opacity: 0.8 }}>
                            <Left>
                                <Text style={{ fontWeight: 0.4 }}>Hotness</Text>
                                <Text style={{ paddingLeft: 5 }}>{this.props.businessHotness}</Text>
                            </Left>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingRight: Dimensions.get('window').width / 11 }}>
                        <TouchableOpacity style={{ justifyContent: 'flex-start', opacity: 0.8 }}>
                            <Left>
                                <Text style={{ fontWeight: 0.4 }}>Follow</Text>
                                <Text style={{ paddingLeft: 5 }}>{this.props.businessFollow}</Text>
                            </Left>
                        </TouchableOpacity>
                    </View>

                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        borderRadius: 4,
        width: null,
    },
    likeBar: {
        justifyContent: 'space-between',
    },
    subCardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 3,
        opacity: 0.7
    }
})

export default BusinessCell;