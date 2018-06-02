import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';
import { Container, Content, Thumbnail, Card, CardItem, List, ListItem, Body } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';

import ExperienceListItem from '../Components/ExperienceListItem'
import EducationListItem from '../Components/EducationListItem'

class BusinessDetailScreen extends Component {

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
                <TouchableOpacity
                    style={{ width: 28, height: 28, right: 10, alignItems: 'center' }}
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <Image source={require('../assets/alice.png')} style={{ height: 28, width: 28, borderWidth: 1, borderColor: '#fff', borderRadius: 14 }} />
                </TouchableOpacity>
            </View>,
        headerTintColor: 'white',
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ backgroundColor: '#fff' }}>
                        <View style={{ alignItems: 'center', paddingHorizontal: 10, paddingTop: 10 }}>
                            <Image source={require('../assets/company2.png')} style={{ width: 80, height: 80 }} />
                            <Text style={{ top: 5, fontWeight: 0.4, fontSize: 18 }}>Spain Tech Center</Text>
                            <Text style={{ top: 5, fontWeight: 0.23, fontSize: 14, textAlign: 'center', height: 40, opacity: 0.9 }}>Specializing in WordPress Website Development, WordPress Consulting, WordPress Training, Social Media Training, Graphic Design, SEO, SEM and much more.</Text>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                              

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 8, paddingBottom: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ borderColor: '#E14437', borderWidth: 1, borderRadius: 3, width: 80, alignItems: 'center', paddingVertical: 3, right: 5 }}>
                                        <Text style={{ color: '#E14437', fontWeight: 0.4, fontSize: 13 }}>Follow</Text>
                                    </TouchableOpacity>
                                    >
                                    <TouchableOpacity style={{ borderColor: '#E14437', borderWidth: 1, borderRadius: 3, width: 80, alignItems: 'center', paddingVertical: 3 }}>
                                        <Text style={{ color: '#E14437', fontWeight: 0.4, fontSize: 13 }}>Message</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card style={{ backgroundColor: '#fff', borderTopColor: '#eee', borderTopWidth: 1 }}>
                        <CardItem style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 10, opacity: 0.8, borderLeftColor: '#fe5858', borderLeftWidth: 2 }}>
                            <Text style={{ fontWeight: 0.3 }}>Followers</Text>
                        </CardItem>
                        <View style={{ flex: 3, flexDirection: 'row', paddingBottom: 10 }}>
                            <ScrollView horizontal={true} contentContainerStyle={{ alignItems: 'center', marginHorizontal: 12 }}>
                                <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => this.props.navigation.navigate('UserProfileScreen')}>
                                    <Image source={require('../assets/allen.png')} style={{ height: 40, width: 40 }} />
                                </TouchableOpacity >
                                <TouchableOpacity style={{ paddingRight: 10 }}>
                                    <Image source={require('../assets/alice.png')} style={{ height: 40, width: 40 }} />
                                </TouchableOpacity><TouchableOpacity style={{ paddingRight: 10 }}>
                                    <Image source={require('../assets/allen.png')} style={{ height: 40, width: 40 }} />
                                </TouchableOpacity><TouchableOpacity style={{ paddingRight: 10 }}>
                                    <Image source={require('../assets/alice.png')} style={{ height: 40, width: 40 }} />
                                </TouchableOpacity><TouchableOpacity style={{ paddingRight: 10 }}>
                                    <Image source={require('../assets/allen.png')} style={{ height: 40, width: 40 }} />
                                </TouchableOpacity>

                            </ScrollView>
                        </View>
                    </Card>



                    <Card style={{ backgroundColor: '#fff', borderTopColor: '#eee', borderTopWidth: 1 }}>
                        <CardItem style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 10, opacity: 0.8, borderLeftColor: '#edbc7a', borderLeftWidth: 2 }}>
                            <Text style={{ fontWeight: 0.3 }}>Overview</Text>
                        </CardItem>
                        <List>
                            <ListItem>
                                <Text style={{ color: '#333' }}>Business Type:</Text><Text>Other</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={{ color: '#333' }}>Location:</Text><Text>Fort Lauderdale, FL, USA</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={{ color: '#333' }}>Established:</Text><Text>2005</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={{ color: '#333' }}>No. of Employees:</Text><Text>5-10</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={{ color: '#333' }}>Income:</Text><Text>≤1 million/year</Text>
                            </ListItem>
                        </List>
                    </Card>

  


                    <Card style={{ backgroundColor: '#fff', borderTopColor: '#eee', borderTopWidth: 1 }}>
                        <CardItem style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 10, opacity: 0.8, borderLeftColor: '#b2d6ca', borderLeftWidth: 2 }}>
                            <Text style={{ fontWeight: 0.3 }}>Activity</Text>
                        </CardItem>
                        <List>
                            <ListItem>
                                <View style={{}}>
                                    <Image source={require('../assets/alice.png')} style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: '#eee' }} />
                                </View>
                                <Body style={{ paddingLeft: 10 }}>
                                    <Text>Alexander Mcqueen just viewed Real Crowd</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <View style={{}}>
                                    <Image source={require('../assets/allen.png')} style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: '#eee' }} />
                                </View>
                                <Body style={{ paddingLeft: 10 }}>
                                    <Text>Allen just viewed and followed Real Crowd</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Card>

                    <Card style={{ backgroundColor: '#fff', borderTopColor: '#eee', borderTopWidth: 1 }}>
                        <CardItem style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 10, opacity: 0.8, borderLeftColor: '#fe5858', borderLeftWidth: 2 }}>
                            <Text style={{ fontWeight: 0.3 }}>Social Media</Text>
                        </CardItem>
                        <List>
                            <ListItem>
                                <View style={{}}>
                                    <Image source={require('../assets/facebook.png')} style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: '#eee' }} />
                                </View>
                                <Body style={{ paddingLeft: 10 }}>
                                    <Text>www.facebook.com/mcqueen</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <View style={{}}>
                                    <Image source={require('../assets/linkedin.png')} style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: '#eee' }} />
                                </View>
                                <Body style={{ paddingLeft: 10 }}>
                                    <Text>www.linkedin.com/real-crowd</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <View style={{}}>
                                    <Image source={require('../assets/twitter.png')} style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: '#eee' }} />
                                </View>
                                <Body style={{ paddingLeft: 10 }}>
                                    <Text>www.twitter.com/real-crowd</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <View style={{}}>
                                    <Image source={require('../assets/wechat.png')} style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: '#eee' }} />
                                </View>
                                <Body style={{ paddingLeft: 10 }}>
                                    <Text>realcrowd0011</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Card>

                    <Card>
                        <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, opacity: 0.8, borderLeftColor: '#b2d6ca', borderLeftWidth: 2 }}>
                            <Text style={{ fontWeight: 0.3 }}>Comments</Text>
                            <TouchableOpacity>
                                <Image source={require('../assets/edit.png')} style={{ width: 15, height: 15 }} />
                            </TouchableOpacity>
                        </CardItem>
                        <List>
                            <ListItem>
                                <View style={{}}>
                                    <Image source={require('../assets/alice.png')} style={{ width: 30, height: 30, borderRadius: 5, borderWidth: 0.5, borderColor: '#eee' }} />
                                </View>
                                <Body style={{ paddingLeft: 10 }}>
                                    <Text>What is the team size of your project?</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <View style={{}}>
                                    <Image source={require('../assets/grandma.png')} style={{ width: 30, height: 30, borderRadius: 5, borderWidth: 0.5, borderColor: '#eee' }} />
                                </View>
                                <Body style={{ paddingLeft: 10 }}>
                                    <Text>I cant wait to join your team!</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Card>


                </Content>
            </Container>
        );
    }
}
export default BusinessDetailScreen;