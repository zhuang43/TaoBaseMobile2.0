// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
// import { StackNavigator, TabNavigator } from 'react-navigation';
// import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Container, Content, List, ListItem } from 'native-base'

// class CommentCell extends Component {

//     render() {
//         return (
//             <Card>
//                 <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, opacity: 0.8, borderLeftColor: '#b2d6ca', borderLeftWidth: 2 }}>
//                     <Text style={{ fontWeight: 0.3 }}>Comments</Text>
//                     <TouchableOpacity>
//                         <Image source={require('../assets/edit.png')} style={{ width: 15, height: 15 }} />
//                     </TouchableOpacity>
//                 </CardItem>
//                 <List>
//                     <ListItem>
//                         <View style={{}}>
//                             <Image source={require('../assets/alice.png')} style={{ width: 30, height: 30, borderRadius: 5, borderWidth: 0.5, borderColor: '#eee' }} />
//                         </View>
//                         <Body style={{ paddingLeft: 10 }}>
//                             <Text>What is the team size of your project?</Text>
//                         </Body>
//                     </ListItem>
//                     <ListItem>
//                         <View style={{}}>
//                             <Image source={require('../assets/grandma.png')} style={{ width: 30, height: 30, borderRadius: 5, borderWidth: 0.5, borderColor: '#eee' }} />
//                         </View>
//                         <Body style={{ paddingLeft: 10 }}>
//                             <Text>I cant wait to join your team!</Text>
//                         </Body>
//                     </ListItem>
//                     <ListItem>
//                         <View style={{}}>
//                             <Image source={require('../assets/alice.png')} style={{ width: 30, height: 30, borderRadius: 5, borderWidth: 0.5, borderColor: '#eee' }} />
//                         </View>
//                         <Body style={{ paddingLeft: 10 }}>
//                             <Text>Is it avaliable right now?</Text>
//                         </Body>
//                     </ListItem>
//                     <ListItem>
//                         <View style={{}}>
//                             <Image source={require('../assets/grandma.png')} style={{ width: 30, height: 30, borderRadius: 5, borderWidth: 0.5, borderColor: '#eee' }} />
//                         </View>
//                         <Body style={{ paddingLeft: 10 }}>
//                             <Text>This is exactly what I am looking for, message me please</Text>
//                         </Body>
//                     </ListItem>
//                 </List>
//             </Card>
//         )
//     }
// }
// export default CommentCell;