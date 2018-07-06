// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native';
// import { Container, Content } from 'native-base'
// import { StackNavigator, TabNavigator } from 'react-navigation';
// import FeedCell from '../Components/FeedCell';
// import BusinessCell from '../Components/BusinessCell'
// import PremiumCell from '../Components/PremiumCell'

// class BusinessListScreen extends Component {

//     static navigationOptions = {
//         headerStyle: {
//             backgroundColor: '#E14437',
//         },
//         headerTitleStyle: {
//             color: '#fff',
//             fontSize: '18'
//         },
//         headerRight:
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <TouchableOpacity>
//                     <View style={{ backgroundColor: '#fff', right: 14, paddingVertical: 5, width: Dimensions.get('window').width - 80 }}>
//                         <Text style={{ color: '#777' }}>  Search</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity  style={{paddingRight:10}}>
//                     <Image source={require('../assets/filter.png')} style={{width:21, height:21}}/>
//                 </TouchableOpacity>
//             </View>,
//                 headerTintColor: 'white',

//             }

//     render() {
//         return (
//             <Container>
//                     <Content>
//                         <PremiumCell />
//                         <BusinessCell
//                             businessName='Spain Tech Center'
//                             businessNote='Spain Tech Center is a public, non-profit initiative that facilitates the successful landing of Spanish technology companies in Silicon Valley and the US. Since our founding in 2011, we have helped over 700'
//                             businessType='Investor / Incubator'
//                             businessLocation='San Francisco, CA, USA'
//                             businessIndustry='Mobile-/-Mobile-application/-Telecommunications'
//                             businessSize='20+'
//                             businessIncome='≤1 million'
//                             businessHotness='14425'
//                             businessFollow='824'
//                         />
//                         <BusinessCell
//                             businessName='Launch Labs'
//                             businessNote='Launch Labs is an idea catalyst. A collective of entrepreneurs, hackers, hustlers, and designers. We create, advise, and invest in iconic companies building the future through technology.'
//                             businessType='Investor / Incubator'
//                             businessLocation='Vancouver, BC, Canada'
//                             businessIndustry='Technology General'
//                             businessSize='5-10'
//                             businessIncome='≤1 million'
//                             businessHotness='923'
//                             businessFollow='8212'
//                         />
//                         <BusinessCell
//                             businessName='500 Nordics'
//                             businessNote='500 Startups is bringing Silicon Valley best practices to the Nordics.'
//                             businessType='Investor / Incubator'
//                             businessLocation='Oslo, Norway'
//                             businessIndustry='Consumer products / Services General'
//                             businessSize='1-5'
//                             businessIncome='≤1 million'
//                             businessHotness='25'
//                             businessFollow='824'
//                         />

//                     </Content>
//                 </Container>
//                 );
//             }
//         }

// export default BusinessListScreen;
