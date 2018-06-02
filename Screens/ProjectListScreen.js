import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Container, Content } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';
import FeedCell from '../Components/FeedCell';
import ProjectCell from '../Components/ProjectCell'
import PremiumCell from '../Components/PremiumCell'

class ProjectListScreen extends Component {


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
                    <PremiumCell />
                    <ProjectCell
                        navigation={this.props.navigation}
                        projectName='Headout'
                        projectNote='Headout is an on-demand mobile marketplace that helps folks discover & book the most incredible activities'
                        projectLocation='San Francisco, CA, USA'
                        projectField='Mobile-/-Mobile-application/-Telecommunications'
                        projectHotness='14425'
                        projectFollow='824'
                    />
                    <ProjectCell
                        projectName='Seneca Systems'
                        projectNote='Government workers get more work done with Romulus. '
                        projectLocation='Redwood City, CA, USA'
                        projectField='Open-Data'
                        projectHotness='3421'
                        projectFollow='4213'
                    />
                    <ProjectCell
                        projectName='RealCrowd'
                        projectNote='RealCrowd is breaking down the barriers to real estate investing by providing a syndication platform'
                        projectLocation='Palo Alto, CA, USA'
                        projectField='Real Estate'
                        projectHotness='5312'
                        projectFollow='6347'
                    />
                    <ProjectCell
                        projectName='Cognito'
                        projectNote='Cognito is focused on simplifying identity verification through cutting-edge technology integrations and partnerships. '
                        projectLocation='Redwood City, CA, USA'
                        projectField='Software'
                        projectHotness='2315'
                        projectFollow='63472'
                    />
                    <ProjectCell
                        projectName='RealReal'
                        projectNote='RealCrowd is breaking down the barriers to real estate investing by providing a syndication platform'
                        projectLocation='Palo Alto, CA, USA'
                        projectField='Real Estate'
                        projectHotness='5312'
                        projectFollow='6347'
                    />
                </Content>
            </Container>
        );
    }
}

export default ProjectListScreen;