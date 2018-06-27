import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';
import { Container, Content, Tab, Tabs, Header } from 'native-base'
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper'

import HomeMenuCell from "../Components/HomeMenuCell"
import FeaturedUserCell from '../Components/FeaturedUserCell';
import FeedCell from '../Components/FeedCell';
import ProjectCell from '../Components/ProjectCell'
import BusinessCell from '../Components/BusinessCell'
import PremiumCell from '../Components/PremiumCell'

import ProjectListScreen from './ProjectListScreen';
import BusinessListScreen from './BusinessListScreen'
import ProfileScreen from './ProfileScreen'
import UserProfileScreen from './UserProfileScreen'
import FeedScreen from './FeedScreen'
import PartnerListScreen from './PartnerListScreen'
import ProjectDetailScreen from './ProjectDetailScreen'
import BusinessDetailScreen from './BusinessDetailScreen'
import FeedDetailScreen from './FeedDetailScreen'

class HomeScreen extends Component {



    componentWillMount() {
        this.login();
    }

    login = async () => {
        const body = {
            username: "zhuang43@ucsc.edu",
            password: "1010376881Ss!"
        }
        fetch("https://www.taobase.com/login/mobilelogin", {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(
            (res) => {
                return res.json();
            }).then((data) => {
                if (data.code === 5) {
                    console.log("login success");
                } else if (data.code === 1) {
                    console.log("fail");
                } else if (data.code === 2) {
                    console.log("not activate");
                }
            }).catch((error) => {
                console.error(error);
            }
            )
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#E14437',
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: '18'
        },
        headerLeft:
            <TouchableOpacity style={{ alignItems: 'center' }} >
                <View style={{ backgroundColor: '#fff', left: 10, paddingVertical: 5, width: Dimensions.get('window').width - 60 }}>
                    <Text style={{ color: '#777' }}>  Search</Text>
                </View>
            </TouchableOpacity>,
        headerRight:
            <TouchableOpacity
                style={{ width: 28, height: 28, right: 10, alignItems: 'center' }}
                onPress={() => navigation.navigate('ProfileScreen')}
            >
                <Image source={require('../assets/alice.png')} style={{ height: 28, width: 28, borderWidth: 1, borderColor: '#fff', borderRadius: 14 }} />>
            </TouchableOpacity>
    })

    render() {
        return (
            <Container>
                <Tabs initialPage={0}
                    tabContainerStyle={{ height: 42 }}
                    tabBarUnderlineStyle={{
                        backgroundColor: "#E14437",
                        height: 3,
                    }}
                >
                    <Tab heading="What's new"
                        activeTextStyle={{ color: '#E14437' }}
                    >
                        <ScrollView>
                            <FeaturedUserCell
                                navigation={this.props.navigation}
                            />
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


                        </ScrollView>
                    </Tab>
                    <Tab heading="Businesses"
                        activeTextStyle={{ color: '#E14437', fontWeight: 'normal' }}>
                        >
                        <ScrollView>
                            <BusinessCell
                                navigation={this.props.navigation}
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
                            <BusinessCell
                                navigation={this.props.navigation}
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
                            <BusinessCell
                                navigation={this.props.navigation}
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
                        </ScrollView>

                    </Tab>
                    <Tab heading="Projects"
                        activeTextStyle={{ color: '#E14437', fontWeight: 'normal' }}>
                        >
                        <ScrollView>
                            <ProjectCell
                                navigation={this.props.navigation}
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
                            <ProjectCell
                                projectName='Seneca Systems'
                                projectNote='Government workers get more work done with Romulus. '
                                projectLocation='Redwood City, CA, USA'
                                projectField='Open-Data'
                                projectHotness='342152'
                                projectFollow='4213'
                            />
                            <ProjectCell
                                projectName='Seneca Systems'
                                projectNote='Government workers get more work done with Romulus. '
                                projectLocation='Redwood City, CA, USA'
                                projectField='Open-Data'
                                projectHotness='342152'
                                projectFollow='4213'
                            />
                            <ProjectCell
                                projectName='Seneca Systems'
                                projectNote='Government workers get more work done with Romulus. '
                                projectLocation='Redwood City, CA, USA'
                                projectField='Open-Data'
                                projectHotness='342152'
                                projectFollow='4213'
                            />
                        </ScrollView>
                    </Tab>
                </Tabs>
            </Container>


        );
    }
}

//Setup Navigatior
const HomeNavigator = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    ProjectListScreen: { screen: ProjectListScreen },
    BusinessListScreen: { screen: BusinessListScreen },
    ProfileScreen: { screen: ProfileScreen },
    UserProfileScreen: { screen: UserProfileScreen },
    FeedScreen: { screen: FeedScreen },
    PartnerListScreen: { screen: PartnerListScreen },
    ProjectDetailScreen: { screen: ProjectDetailScreen },
    BusinessDetailScreen: { screen: BusinessDetailScreen },
    FeedDetailScreen: { screen: FeedDetailScreen },
})


export default HomeNavigator;