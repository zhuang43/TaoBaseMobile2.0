import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Container, Content } from 'native-base'


class ProjectCell extends Component {

    render() {
        return (
            <Card style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProjectDetailScreen')}>
                    <CardItem>
                        <Left>
                            <Image source={require('../assets/company1.png')} style={{ height: 70, width: 70 }} />
                            <Body>
                                <Text style={{ fontSize: 16, paddingBottom: 3 }}>{this.props.projectName}</Text>
                                <Text style={{ color: '#222', paddingRight: 0, fontSize: 13, paddingBottom: 3 }}>{this.props.projectNote}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.7, paddingTop: 5 }}>
                                    <Image source={require('../assets/map-pin.png')} style={{ height: 13, width: 11 }} />
                                    <Text style={{ paddingLeft: 5, fontSize: 13 }}>{this.props.projectLocation}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 3, opacity: 0.7 }}>
                                    <Image source={require('../assets/crosshair.png')} style={{ height: 11, width: 11 }} />
                                    <Text style={{ paddingLeft: 5, fontSize: 13 }}>{this.props.projectField}</Text>
                                </View>
                            </Body>
                        </Left>
                    </CardItem>
                </TouchableOpacity>

                <CardItem style={{ borderTopColor: '#ccc', borderTopWidth: 0.5, justifyContent: 'space-between' }}>
                    <View style={{ paddingLeft: Dimensions.get('window').width / 11 }}>
                        <TouchableOpacity style={{ justifyContent: 'flex-start', opacity: 0.8 }}>
                            <Left>
                                <Text>Hotness</Text>
                                <Text style={{ paddingLeft: 5 }}>{this.props.projectHotness}</Text>
                            </Left>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingRight: Dimensions.get('window').width / 11 }}>
                        <TouchableOpacity style={{ justifyContent: 'flex-start', opacity: 0.8 }}>
                            <Left>
                                <Text>Follow</Text>
                                <Text style={{ paddingLeft: 5 }}>{this.props.projectFollow}</Text>
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
        borderRadius: 4
    },
    likeBar: {
        justifyContent: 'space-between',
    }
})

export default ProjectCell;