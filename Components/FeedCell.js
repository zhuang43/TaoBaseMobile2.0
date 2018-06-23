// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { StackNavigator, TabNavigator } from 'react-navigation';
// import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Container, Content } from 'native-base'

// class FeedCell extends Component {

//     render() {
//         return (
//             <Card style={styles.container}>\
//                 <TouchableOpacity onPress={() => this.props.navigation.navigate('FeedDetailScreen')}>
//                     <CardItem>
//                         <Left>
//                             <Image source={require('../assets/allen.png')} style={{ height: 40, width: 40, borderRadius: 20 }} />
//                             <Body style={{ flexDirection: 'column', justifyContent: 'center' }}>
//                                 <Text style={{ fontSize: 15 }}>{this.props.feeder}</Text>
//                                 <Text style={{ color: '#888', paddingRight: 0, fontSize: 14 }}>{this.props.feederNote}</Text>
//                             </Body>
//                         </Left>
//                     </CardItem>

//                     <Body>
//                         <Text style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10, top: -6 }}>{this.props.feedContent}</Text>
//                     </Body>
//                 </TouchableOpacity>
//                 <CardItem style={{ borderTopColor: '#ccc', borderTopWidth: 0.5, justifyContent: 'space-between' }}>
//                     <View>
//                         <TouchableOpacity style={styles.subCarItem}>
//                             <Left>
//                                 <Image source={require('../assets/share.png')} style={{ height: 14, width: 14 }} />
//                                 <Text style={{ paddingLeft: 5 }}>{this.props.feedReposts}</Text>
//                             </Left>
//                         </TouchableOpacity>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={styles.subCarItem}>
//                             <Left>
//                                 <Image source={require('../assets/mail.png')} style={{ height: 12, width: 15 }} />
//                                 <Text style={{ paddingLeft: 5 }}>{this.props.feedComments}</Text>
//                             </Left>
//                         </TouchableOpacity>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={styles.subCarItem}>
//                             <Left>
//                                 <Image source={require('../assets/thumbs-up.png')} style={{ height: 14, width: 14 }} />
//                                 <Text style={{ paddingLeft: 5 }}>{this.props.feedLikes}</Text>
//                             </Left>
//                         </TouchableOpacity>
//                     </View>

//                 </CardItem>
//             </Card>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 10,
//         borderRadius: 4,
//         width: null,
//     },
//     likeBar: {
//         justifyContent: 'space-between',
//     },
//     subCarItem: {
//         justifyContent: 'flex-start',
//         opacity: 0.6
//     }
// })

// export default FeedCell;