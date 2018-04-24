import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Container, Content } from 'native-base'
import { StackNavigator } from 'react-navigation';

import HomeMenuCell from "../Components/HomeMenuCell"
import FeaturedUserCell from '../Components/FeaturedUserCell';
import FeedCell from '../Components/FeedCell';
import ProjectCell from '../Components/ProjectCell'
import BusinessCell from '../Components/BusinessCell'
import PremiumCell from '../Components/PremiumCell'

import ProjectListScreen from './ProjectListScreen';
import BusinessListScreen from './BusinessListScreen'
import ProfileScreen from './ProfileScreen'

class HomeScreen extends Component {


    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#E14437',
        },
        headerTitleStyle: {
            color: '#fff',
                fontSize: '18'
        },
        headerLeft:
        <TouchableOpacity style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', left: 10, paddingVertical: 5, width: Dimensions.get('window').width - 60 }}>
                <Text style={{ color: '#777' }}>  Search</Text>
            </View>
        </TouchableOpacity> ,
            headerRight:
        <TouchableOpacity
            style={{ width: 28, height: 28, right: 10, alignItems: 'center' }}
        >
            <Image source={require('../assets/alice.png')} style={{ height: 28, width: 28, borderWidth: 1, borderColor: '#fff', borderRadius: '14' }} />>
            </TouchableOpacity>

    })

    render() {
        return (

            <Container>
                <Content>
                    <FeaturedUserCell />
                    <HomeMenuCell navigation={this.props.navigation} />
                    <Text style={{ color: '#777' }}> Projects of the week</Text>
                    <ProjectCell
                        projectName='RealCrowd'
                        projectNote='RealCrowd is breaking down the barriers to real estate investing by providing a syndication platform'
                        projectLocation='Palo Alto, CA, USA'
                        projectField='Real Estate'
                        projectHotness='5312'
                        projectFollow='6347'
                    />
                    <ProjectCell
                        projectName='Seneca Systems'
                        projectNote='Government workers get more work done with Romulus. '
                        projectLocation='Redwood City, CA, USA'
                        projectField='Open-Data'
                        projectHotness='342152'
                        projectFollow='4213'
                    />
                    <Text style={{ color: '#777' }}> Our choice of Business</Text>
                    <BusinessCell
                        businessName='Spain Tech Center'
                        businessNote='Spain Tech Center is a public, non-profit initiative that facilitates the successful landing of Spanish technology companies in Silicon Valley and the US. Since our founding in 2011, we have helped over 700'
                        businessType='Investor / Incubator'
                        businessLocation='San Francisco, CA, USA'
                        businessIndustry='Mobile-/-Mobile-application/-Telecommunications'
                        businessSize='20+'
                        businessIncome='≤1 million'
                        businessHotness='14425'
                        businessFollow='824'
                    />
                    <Text style={{ color: '#777' }}> Hot feeds</Text>
                    <FeedCell
                        feeder='Jack Ma'
                        feederNote='Richest person in China'
                        feedContent='Ma Yun known professionally as Jack Ma, is a Chinese business magnate, investor, and philanthropist. He is the co-founder and executive chairman of Alibaba Group, a multinational technology conglomerate. As of March 2018, he is one of China'
                        feedReposts='32442'
                        feedComments='421214'
                        feedLikes='89432'
                    />
                    <PremiumCell />
                    <FeedCell
                        feeder='Brett Napoli'
                        feederNote='Web Site Mgmt at Ambition Insight'
                        feedContent='This page should appear on the "Home" tab and it will be used *MUCH* more by the users. It is unlikely that they will click into this section, but if it appears on the Home page then they will guarantee to see it, 100% of logins. Which means it will have much more content, much more action, and much more monetization!'
                        feedReposts='325523'
                        feedComments='9475'
                        feedLikes='328453' />
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
                </Content>
            </Container>

        );
    }
}

//Setup Navigatior 
const HomeNavigator = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    ProjectListScreen: { screen: ProjectListScreen },
    BusinessListScreen: { screen: BusinessListScreen },
    ProfileScreen: { screen: ProfileScreen }
})


export default HomeNavigator;