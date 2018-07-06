// import React, { Component } from 'react'
// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	Button,
// 	TouchableOpacity,
// 	Dimensions,
// 	Image,
// 	ImageBackground
// } from 'react-native'
// import {
// 	Container,
// 	Content,
// 	Thumbnail,
// 	Card,
// 	CardItem,
// 	List,
// 	ListItem,
// 	Body
// } from 'native-base'
// import { StackNavigator, TabNavigator } from 'react-navigation'

// import ExperienceListItem from '../Components/ExperienceListItem'
// import EducationListItem from '../Components/EducationListItem'

// class UserProfileScreen extends Component {
// 	static navigationOptions = {
// 		headerStyle: {
// 			backgroundColor: '#E14437'
// 		},
// 		headerTitleStyle: {
// 			color: '#fff',
// 			fontSize: 18
// 		},
// 		headerRight: (
// 			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
// 				<TouchableOpacity>
// 					<View
// 						style={{
// 							backgroundColor: '#fff',
// 							right: 14,
// 							paddingVertical: 5,
// 							width: Dimensions.get('window').width - 80
// 						}}>
// 						<Text style={{ color: '#777' }}> Search</Text>
// 					</View>
// 				</TouchableOpacity>
// 				<TouchableOpacity
// 					style={{ width: 28, height: 28, right: 10, alignItems: 'center' }}
// 					onPress={() => navigation.navigate('ProfileScreen')}>
// 					<Image
// 						source={require('../assets/alice.png')}
// 						style={{
// 							height: 28,
// 							width: 28,
// 							borderWidth: 1,
// 							borderColor: '#fff',
// 							borderRadius: 14
// 						}}
// 					/>
// 				</TouchableOpacity>
// 			</View>
// 		),
// 		headerTintColor: 'white'
// 	}
// 	render() {
// 		return (
// 			<Container>
// 				<Content>
// 					<Card style={{ backgroundColor: '#fff', height: 220 }}>
// 						<View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
// 							<Image
// 								source={require('../assets/allen.png')}
// 								style={{ width: 80, height: 80 }}
// 							/>
// 							<Text style={{ top: 5, fontWeight: 'normal', fontSize: 18 }}>
// 								Barry Allen
// 							</Text>
// 							<Text
// 								style={{
// 									top: 5,
// 									fontWeight: 'normal',
// 									fontSize: 14,
// 									textAlign: 'center',
// 									height: 40,
// 									opacity: 0.9
// 								}}>
// 								Chief designer at Givenchy from 1996 to 2001 and founded his own
// 								Alexander McQueen label
// 							</Text>
// 							<View
// 								style={{
// 									flexDirection: 'row',
// 									paddingHorizontal: 10,
// 									flexWrap: 'wrap',
// 									justifyContent: 'center'
// 								}}>
// 								<View
// 									style={{
// 										flexDirection: 'row',
// 										alignItems: 'center',
// 										opacity: 0.7
// 									}}>
// 									<Image
// 										source={require('../assets/map-pin.png')}
// 										style={{ height: 13, width: 11 }}
// 									/>
// 									<Text style={{ paddingLeft: 5, fontSize: 13 }}>
// 										San Francisco, CA
// 									</Text>
// 								</View>
// 								<View
// 									style={{
// 										flexDirection: 'row',
// 										alignItems: 'center',
// 										opacity: 0.7,
// 										paddingLeft: 8
// 									}}>
// 									<Image
// 										source={require('../assets/crosshair.png')}
// 										style={{ height: 11, width: 11 }}
// 									/>
// 									<Text style={{ paddingLeft: 5, fontSize: 13 }}>
// 										Software Development
// 									</Text>
// 								</View>
// 								<View
// 									style={{
// 										flexDirection: 'row',
// 										alignItems: 'center',
// 										opacity: 0.7,
// 										paddingLeft: 8
// 									}}>
// 									<Image
// 										source={require('../assets/clock.png')}
// 										style={{ height: 11, width: 11 }}
// 									/>
// 									<Text style={{ paddingLeft: 5, fontSize: 13 }}>
// 										10-15 years
// 									</Text>
// 								</View>
// 							</View>
// 							<View
// 								style={{
// 									flexDirection: 'row',
// 									justifyContent: 'center',
// 									paddingTop: 8
// 								}}>
// 								<View style={{ flexDirection: 'row' }}>
// 									<TouchableOpacity
// 										style={{
// 											borderColor: '#E14437',
// 											borderWidth: 1,
// 											borderRadius: 3,
// 											width: 80,
// 											alignItems: 'center',
// 											paddingVertical: 3,
// 											right: 5
// 										}}>
// 										<Text
// 											style={{
// 												color: '#E14437',
// 												fontWeight: 'normal',
// 												fontSize: 13
// 											}}>
// 											Follow
// 										</Text>
// 									</TouchableOpacity>
// 									>
// 									<TouchableOpacity
// 										style={{
// 											borderColor: '#E14437',
// 											borderWidth: 1,
// 											borderRadius: 3,
// 											width: 80,
// 											alignItems: 'center',
// 											paddingVertical: 3
// 										}}>
// 										<Text
// 											style={{
// 												color: '#E14437',
// 												fontWeight: 'normal',
// 												fontSize: 13
// 											}}>
// 											Message
// 										</Text>
// 									</TouchableOpacity>
// 								</View>
// 							</View>
// 						</View>
// 					</Card>

// 					<Card
// 						style={{
// 							backgroundColor: '#fff',
// 							borderTopColor: '#eee',
// 							borderTopWidth: 1
// 						}}>
// 						<CardItem
// 							style={{
// 								flexDirection: 'row',
// 								justifyContent: 'flex-start',
// 								paddingHorizontal: 10,
// 								opacity: 0.8
// 							}}>
// 							<Text style={{ fontWeight: 'normal' }}>Experience</Text>
// 						</CardItem>
// 						<ExperienceListItem
// 							ExperienceTitle="Store manager"
// 							ExperienceCompany="BMW stevens creek"
// 							ExperiencePeriod="Sep 2015 - Present"
// 						/>
// 						<ExperienceListItem
// 							ExperienceTitle="Cashier"
// 							ExperienceCompany="CVS Pharmacy"
// 							ExperiencePeriod="Sep 2010 - June 2015"
// 						/>
// 					</Card>

// 					<Card
// 						style={{
// 							backgroundColor: '#fff',
// 							borderTopColor: '#eee',
// 							borderTopWidth: 1
// 						}}>
// 						<CardItem
// 							style={{
// 								flexDirection: 'row',
// 								justifyContent: 'flex-start',
// 								paddingHorizontal: 10,
// 								opacity: 0.8
// 							}}>
// 							<Text style={{ fontWeight: 'normal' }}>Education</Text>
// 						</CardItem>
// 						<EducationListItem
// 							EducationName="University of California, Santa Cruz"
// 							EducationDegree="Bachelor's degree, Computer Science"
// 							EducationPeriod="Sep 2015 - Present"
// 						/>
// 						<EducationListItem
// 							EducationName="University of South California"
// 							EducationDegree="Master degree, Computer Engineering"
// 							EducationPeriod="Sep 2019 - June 2020"
// 						/>
// 					</Card>
// 					<Card>
// 						<CardItem
// 							style={{
// 								flexDirection: 'row',
// 								justifyContent: 'flex-start',
// 								paddingHorizontal: 10,
// 								opacity: 0.8
// 							}}>
// 							<Text style={{ fontWeight: 'normal' }}>Skill</Text>
// 						</CardItem>

// 						<List>
// 							<ListItem>
// 								<Text>Excel</Text>
// 							</ListItem>
// 							<ListItem>
// 								<Text>Word</Text>
// 							</ListItem>
// 							<ListItem>
// 								<Text>MBA</Text>
// 							</ListItem>
// 						</List>
// 					</Card>

// 					<Card
// 						style={{
// 							backgroundColor: '#fff',
// 							borderTopColor: '#eee',
// 							borderTopWidth: 1
// 						}}>
// 						<CardItem
// 							style={{
// 								flexDirection: 'row',
// 								justifyContent: 'flex-start',
// 								paddingHorizontal: 10,
// 								opacity: 0.8
// 							}}>
// 							<Text style={{ fontWeight: 'normal' }}>Activity</Text>
// 						</CardItem>
// 						<List>
// 							<ListItem>
// 								<View style={{}}>
// 									<Image
// 										source={require('../assets/company2.png')}
// 										style={{
// 											width: 30,
// 											height: 30,
// 											borderRadius: 15,
// 											borderWidth: 1,
// 											borderColor: '#eee'
// 										}}
// 									/>
// 								</View>
// 								<Body style={{ paddingLeft: 10 }}>
// 									<Text>
// 										Alexander Mcqueen just followed RealCrowd Business
// 									</Text>
// 								</Body>
// 							</ListItem>
// 							<ListItem>
// 								<View style={{}}>
// 									<Image
// 										source={require('../assets/company3.png')}
// 										style={{
// 											width: 30,
// 											height: 30,
// 											borderRadius: 15,
// 											borderWidth: 1,
// 											borderColor: '#eee'
// 										}}
// 									/>
// 								</View>
// 								<Body style={{ paddingLeft: 10 }}>
// 									<Text>
// 										Alexander Mcqueen just followed Domestic Farm Project
// 									</Text>
// 								</Body>
// 							</ListItem>
// 							<ListItem>
// 								<View style={{}}>
// 									<Image
// 										source={require('../assets/allen.png')}
// 										style={{
// 											width: 30,
// 											height: 30,
// 											borderRadius: 15,
// 											borderWidth: 1,
// 											borderColor: '#eee'
// 										}}
// 									/>
// 								</View>
// 								<Body style={{ paddingLeft: 10 }}>
// 									<Text>Allen just viewed and followed Alexander Mcqueen</Text>
// 								</Body>
// 							</ListItem>
// 						</List>
// 					</Card>

// 					<Card
// 						style={{
// 							backgroundColor: '#fff',
// 							borderTopColor: '#eee',
// 							borderTopWidth: 1
// 						}}>
// 						<CardItem
// 							style={{
// 								flexDirection: 'row',
// 								justifyContent: 'flex-start',
// 								paddingHorizontal: 10,
// 								opacity: 0.8
// 							}}>
// 							<Text style={{ fontWeight: 'normal' }}>Social Media</Text>
// 						</CardItem>
// 						<List>
// 							<ListItem>
// 								<View style={{}}>
// 									<Image
// 										source={require('../assets/facebook.png')}
// 										style={{
// 											width: 30,
// 											height: 30,
// 											borderRadius: 15,
// 											borderWidth: 1,
// 											borderColor: '#eee'
// 										}}
// 									/>
// 								</View>
// 								<Body style={{ paddingLeft: 10 }}>
// 									<Text>www.facebook.com/mcqueen</Text>
// 								</Body>
// 							</ListItem>
// 							<ListItem>
// 								<View style={{}}>
// 									<Image
// 										source={require('../assets/linkedin.png')}
// 										style={{
// 											width: 30,
// 											height: 30,
// 											borderRadius: 15,
// 											borderWidth: 1,
// 											borderColor: '#eee'
// 										}}
// 									/>
// 								</View>
// 								<Body style={{ paddingLeft: 10 }}>
// 									<Text>www.linkedin.com/mcqueen</Text>
// 								</Body>
// 							</ListItem>
// 							<ListItem>
// 								<View style={{}}>
// 									<Image
// 										source={require('../assets/twitter.png')}
// 										style={{
// 											width: 30,
// 											height: 30,
// 											borderRadius: 15,
// 											borderWidth: 1,
// 											borderColor: '#eee'
// 										}}
// 									/>
// 								</View>
// 								<Body style={{ paddingLeft: 10 }}>
// 									<Text>www.twitter.com/mcqueen</Text>
// 								</Body>
// 							</ListItem>
// 							<ListItem>
// 								<View style={{}}>
// 									<Image
// 										source={require('../assets/wechat.png')}
// 										style={{
// 											width: 30,
// 											height: 30,
// 											borderRadius: 15,
// 											borderWidth: 1,
// 											borderColor: '#eee'
// 										}}
// 									/>
// 								</View>
// 								<Body style={{ paddingLeft: 10 }}>
// 									<Text>huanzeyun0011</Text>
// 								</Body>
// 							</ListItem>
// 						</List>
// 					</Card>
// 				</Content>
// 			</Container>
// 		)
// 	}
// }
// export default UserProfileScreen
