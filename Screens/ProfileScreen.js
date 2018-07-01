import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	Dimensions,
	Image,
	ImageBackground
} from 'react-native'
import {
	Container,
	Content,
	Thumbnail,
	Card,
	CardItem,
	List,
	ListItem,
	Body
} from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation'

import ExperienceListItem from '../Components/ExperienceListItem'
import EducationListItem from '../Components/EducationListItem'

class ProfileScreen extends Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: '#E14437'
		},
		headerTitleStyle: {
			color: '#fff',
			fontSize: 18
		},
		headerRight: (
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<TouchableOpacity>
					<View
						style={{
							backgroundColor: '#fff',
							right: 14,
							paddingVertical: 5,
							width: Dimensions.get('window').width - 80
						}}>
						<Text style={{ color: '#777' }}> Search</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{ paddingRight: 10 }}>
					<Image
						source={require('../assets/settings.png')}
						style={{ width: 21, height: 21 }}
					/>
				</TouchableOpacity>
			</View>
		),
		headerTintColor: 'white'
	}
	render() {
		return (
			<Container>
				<Content>
					<Card
						style={{
							backgroundColor: '#fff',
							height: 200,
							paddingHorizontal: 10
						}}>
						<CardItem
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-end',
								paddingHorizontal: 10,
								opacity: 0.8
							}}>
							<TouchableOpacity>
								<Image
									source={require('../assets/edit.png')}
									style={{ width: 16, height: 16 }}
								/>
							</TouchableOpacity>
						</CardItem>
						<View style={{ top: -20, alignItems: 'center' }}>
							<Image
								source={require('../assets/alice.png')}
								style={{ width: 80, height: 80 }}
							/>
							<Text style={{ top: 5, fontWeight: 'normal', fontSize: 18 }}>
								Alexander Mcqueen
							</Text>
							<Text
								style={{
									top: 5,
									fontWeight: 'normal',
									fontSize: 14,
									textAlign: 'center',
									height: 40,
									opacity: 0.9
								}}>
								Chief designer at Givenchy from 1996 to 2001 and founded his own
								Alexander McQueen label
							</Text>
							<View
								style={{
									flexDirection: 'row',
									paddingHorizontal: 10,
									flexWrap: 'wrap',
									justifyContent: 'center'
								}}>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										opacity: 0.7
									}}>
									<Image
										source={require('../assets/map-pin.png')}
										style={{ height: 13, width: 11 }}
									/>
									<Text style={{ paddingLeft: 5, fontSize: 13 }}>
										San Francisco, CA
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										opacity: 0.7,
										paddingLeft: 8
									}}>
									<Image
										source={require('../assets/crosshair.png')}
										style={{ height: 11, width: 11 }}
									/>
									<Text style={{ paddingLeft: 5, fontSize: 13 }}>
										Software Development
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										opacity: 0.7,
										paddingLeft: 8
									}}>
									<Image
										source={require('../assets/clock.png')}
										style={{ height: 11, width: 11 }}
									/>
									<Text style={{ paddingLeft: 5, fontSize: 13 }}>
										10-15 years
									</Text>
								</View>
							</View>
						</View>
					</Card>

					<Card
						style={{
							backgroundColor: '#fff',
							borderTopColor: '#eee',
							borderTopWidth: 1
						}}>
						<CardItem
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: 10,
								opacity: 0.8
							}}>
							<Text style={{ fontWeight: 'normal' }}>Experience</Text>
							<TouchableOpacity>
								<Image
									source={require('../assets/edit.png')}
									style={{ width: 16, height: 16 }}
								/>
							</TouchableOpacity>
						</CardItem>
						<ExperienceListItem
							ExperienceTitle="Product manager"
							ExperienceCompany="ソフトバンク（SoftBank)"
							ExperiencePeriod="Sep 2015 - Present"
						/>
						<ExperienceListItem
							ExperienceTitle="Senior Software Developer"
							ExperienceCompany="Facebook"
							ExperiencePeriod="Sep 2010 - June 2015"
						/>
					</Card>

					<Card
						style={{
							backgroundColor: '#fff',
							borderTopColor: '#eee',
							borderTopWidth: 1
						}}>
						<CardItem
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: 10,
								opacity: 0.8
							}}>
							<Text style={{ fontWeight: 'normal' }}>Education</Text>
							<TouchableOpacity>
								<Image
									source={require('../assets/edit.png')}
									style={{ width: 16, height: 16 }}
								/>
							</TouchableOpacity>
						</CardItem>
						<EducationListItem
							EducationName="University of California, Santa Cruz"
							EducationDegree="Bachelor's degree, Computer Science"
							EducationPeriod="Sep 2015 - Present"
						/>
						<EducationListItem
							EducationName="University of South California"
							EducationDegree="Master degree, Computer Engineering"
							EducationPeriod="Sep 2019 - June 2020"
						/>
					</Card>
					<Card>
						<CardItem
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: 10,
								opacity: 0.8
							}}>
							<Text style={{ fontWeight: 'normal' }}>Skill</Text>
							<TouchableOpacity>
								<Image
									source={require('../assets/edit.png')}
									style={{ width: 16, height: 16 }}
								/>
							</TouchableOpacity>
						</CardItem>

						<List>
							<ListItem>
								<Text>Java</Text>
							</ListItem>
							<ListItem>
								<Text>React-native</Text>
							</ListItem>
							<ListItem>
								<Text>Swift</Text>
							</ListItem>
							<ListItem>
								<Text>Data Analysis</Text>
							</ListItem>
						</List>
					</Card>

					<Card
						style={{
							backgroundColor: '#fff',
							borderTopColor: '#eee',
							borderTopWidth: 1
						}}>
						<CardItem
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: 10,
								opacity: 0.8
							}}>
							<Text style={{ fontWeight: 'normal' }}>Activity</Text>
							<TouchableOpacity>
								<Image
									source={require('../assets/edit.png')}
									style={{ width: 16, height: 16 }}
								/>
							</TouchableOpacity>
						</CardItem>
						<List>
							<ListItem>
								<View style={{}}>
									<Image
										source={require('../assets/company2.png')}
										style={{
											width: 30,
											height: 30,
											borderRadius: 15,
											borderWidth: 1,
											borderColor: '#eee'
										}}
									/>
								</View>
								<Body style={{ paddingLeft: 10 }}>
									<Text>
										Alexander Mcqueen just followed RealCrowd Business
									</Text>
								</Body>
							</ListItem>
							<ListItem>
								<View style={{}}>
									<Image
										source={require('../assets/company3.png')}
										style={{
											width: 30,
											height: 30,
											borderRadius: 15,
											borderWidth: 1,
											borderColor: '#eee'
										}}
									/>
								</View>
								<Body style={{ paddingLeft: 10 }}>
									<Text>
										Alexander Mcqueen just followed Domestic Farm Project
									</Text>
								</Body>
							</ListItem>
							<ListItem>
								<View style={{}}>
									<Image
										source={require('../assets/allen.png')}
										style={{
											width: 30,
											height: 30,
											borderRadius: 15,
											borderWidth: 1,
											borderColor: '#eee'
										}}
									/>
								</View>
								<Body style={{ paddingLeft: 10 }}>
									<Text>Allen just viewed and followed Alexander Mcqueen</Text>
								</Body>
							</ListItem>
						</List>
					</Card>

					<Card
						style={{
							backgroundColor: '#fff',
							borderTopColor: '#eee',
							borderTopWidth: 1
						}}>
						<CardItem
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingHorizontal: 10,
								opacity: 0.8
							}}>
							<Text style={{ fontWeight: 'normal' }}>Social Media</Text>
							<TouchableOpacity>
								<Image
									source={require('../assets/edit.png')}
									style={{ width: 16, height: 16 }}
								/>
							</TouchableOpacity>
						</CardItem>
						<List>
							<ListItem>
								<View style={{}}>
									<Image
										source={require('../assets/facebook.png')}
										style={{
											width: 30,
											height: 30,
											borderRadius: 15,
											borderWidth: 1,
											borderColor: '#eee'
										}}
									/>
								</View>
								<Body style={{ paddingLeft: 10 }}>
									<Text>www.facebook.com/mcqueen</Text>
								</Body>
							</ListItem>
							<ListItem>
								<View style={{}}>
									<Image
										source={require('../assets/linkedin.png')}
										style={{
											width: 30,
											height: 30,
											borderRadius: 15,
											borderWidth: 1,
											borderColor: '#eee'
										}}
									/>
								</View>
								<Body style={{ paddingLeft: 10 }}>
									<Text>www.linkedin.com/mcqueen</Text>
								</Body>
							</ListItem>
							<ListItem>
								<View style={{}}>
									<Image
										source={require('../assets/twitter.png')}
										style={{
											width: 30,
											height: 30,
											borderRadius: 15,
											borderWidth: 1,
											borderColor: '#eee'
										}}
									/>
								</View>
								<Body style={{ paddingLeft: 10 }}>
									<Text>www.twitter.com/mcqueen</Text>
								</Body>
							</ListItem>
							<ListItem>
								<View style={{}}>
									<Image
										source={require('../assets/wechat.png')}
										style={{
											width: 30,
											height: 30,
											borderRadius: 15,
											borderWidth: 1,
											borderColor: '#eee'
										}}
									/>
								</View>
								<Body style={{ paddingLeft: 10 }}>
									<Text>huanzeyun0011</Text>
								</Body>
							</ListItem>
						</List>
					</Card>
				</Content>
			</Container>
		)
	}
}
export default ProfileScreen
