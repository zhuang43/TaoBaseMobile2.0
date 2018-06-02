import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';
import { Container, Content, Thumbnail, Card, CardItem, List, ListItem, Body, Left } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';

import ExperienceListItem from '../Components/ExperienceListItem'
import EducationListItem from '../Components/EducationListItem'
import CommentCell from '../Components/ComentCell'


class FeedDetailScreen extends Component {

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
                    <Card>
                        <CardItem style={{ alignItems: 'center' }}>
                            <Left>
                                <Thumbnail small source={require('../assets/allen.png')} />
                                <Body>
                                    <Text style={{ fontSize: 16 }}>Fruity</Text>
                                    <Text style={{ opacity: 0.7 }}>Technology-Other</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text>2018 Miss Fashion Travel Beauty Pageant Sponsorship. 星宇传媒现诚征赞助商，是一个很好的提高贵公司知名度的好时机。 详情请见2018时尚旅游小姐选美赞助方案 https://www.taobase.com/ui/projects/291</Text>
                        </CardItem>
                        <CardItem justifyContent='center'>
                            <Image source={require('../assets/beauty.jpeg')}/>
                        </CardItem>

                        <CardItem style={{ justifyContent: 'space-between' }}>
                            <View>
                                <TouchableOpacity style={styles.subCarItem}>
                                    <Left>
                                        <Image source={require('../assets/share.png')} style={{ height: 14, width: 14 }} />
                                        <Text style={{ paddingLeft: 5 }}>231</Text>
                                    </Left>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.subCarItem}>
                                    <Left>
                                        <Image source={require('../assets/mail.png')} style={{ height: 12, width: 15 }} />
                                        <Text style={{ paddingLeft: 5 }}>9452</Text>
                                    </Left>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.subCarItem}>
                                    <Left>
                                        <Image source={require('../assets/thumbs-up.png')} style={{ height: 14, width: 14 }} />
                                        <Text style={{ paddingLeft: 5 }}>94124</Text>
                                    </Left>
                                </TouchableOpacity>
                            </View>
                        </CardItem>

                        

                    </Card>
                    <Card style={{ backgroundColor: '#fff', borderTopColor: '#eee', borderTopWidth: 1 }}>
                        <CardItem style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 10, opacity: 0.8, borderLeftColor: '#fe5858', borderLeftWidth: 2 }}>
                            <Text style={{ fontWeight: 0.3 }}>Who also viewed</Text>
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
                    <CommentCell />
                </Content>
            </Container>
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
    subCarItem: {
        justifyContent: 'flex-start',
        opacity: 0.6
    }
})
export default FeedDetailScreen;