import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	Dimensions,
	Image,
	ImageBackground,
} from 'react-native';
import { Container, Content, Header } from 'native-base';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { fetchFeatureStarsIcons } from '../store/actions/users';
import HomeMenuCell from '../Components/HomeMenuCell';
import FeaturedUserCell from '../Components/FeaturedUserCell';
import FeedCell from '../Components/FeedCell';
import ProjectCell from '../Components/ProjectCell';
import BusinessCell from '../Components/BusinessCell';
import PremiumCell from '../Components/PremiumCell';

export class HomeScreen extends Component {
	static navigationOptions = () => {
		return {
			header: () => null,
		};
	};

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchFeatureStarsIcons());
	}

	render() {
		return (
			<Container>
				<Header style={styles.header}>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<View
							style={{
								backgroundColor: '#fff',
								padding: 8,
								borderRadius: 2,
								width: Dimensions.get('window').width - 80,
							}}
						>
							<Text style={{ color: '#777' }}> Search</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ width: 28, height: 28, alignItems: 'center' }}
						onPress={() => navigation.navigate('ProfileScreen')}
					>
						<Image
							source={require('../assets/alice.png')}
							style={{
								height: 28,
								width: 28,
								borderWidth: 1,
								borderColor: '#fff',
								borderRadius: 14,
							}}
						/>
					</TouchableOpacity>
				</Header>
				<Content>
					<HomeMenuCell navigation={this.props.navigation} />
					<FeaturedUserCell
						navigation={this.props.navigation}
						icons={this.props.featureStarsIcons}
					/>

					<Text style={{ color: '#777' }}> Projects of the week</Text>
					<ProjectCell
						navigation={this.props.navigation}
						projectName="RealCrowd"
						projectNote="RealCrowd is breaking down the barriers to real estate investing by providing a syndication platform"
						projectLocation="Palo Alto, CA, USA"
						projectField="Real Estate"
						projectHotness="5312"
						projectFollow="6347"
					/>
					<ProjectCell
						projectName="Seneca Systems"
						projectNote="Government workers get more work done with Romulus. "
						projectLocation="Redwood City, CA, USA"
						projectField="Open-Data"
						projectHotness="342152"
						projectFollow="4213"
					/>
					<Text style={{ color: '#777' }}> Our choice of Business</Text>
					<BusinessCell
						navigation={this.props.navigation}
						businessName="Spain Tech Center"
						businessNote="Spain Tech Center is a public, non-profit initiative that facilitates the successful landing of Spanish technology companies in Silicon Valley and the US. Since our founding in 2011, we have helped over 700"
						businessType="Investor / Incubator"
						businessLocation="San Francisco, CA, USA"
						businessIndustry="Mobile-/-Mobile-application/-Telecommunications"
						businessSize="20+"
						businessIncome="≤1 million"
						businessHotness="14425"
						businessFollow="824"
					/>
					<Text style={{ color: '#777' }}> Hot feeds</Text>
					<FeedCell
						feeder="Jack Ma"
						feederNote="Richest person in China"
						feedContent="Ma Yun known professionally as Jack Ma, is a Chinese business magnate, investor, and philanthropist. He is the co-founder and executive chairman of Alibaba Group, a multinational technology conglomerate. As of March 2018, he is one of China"
						feedReposts="32442"
						feedComments="421214"
						feedLikes="89432"
					/>
					<PremiumCell />
					{/* <FeedCell
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
                        feedLikes='132k' /> */}
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#E14437',
	},
});

const mapStateToProps = state => {
	return {
		featureStarsIcons: state.userReducer.featureStarsIcons,
	};
};
export default connect(mapStateToProps)(HomeScreen);
