import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Container,
  Content,
} from 'native-base';
import PartnerListScreen from '../Screens/PartnerListScreen';

export function FeaturedUserCell({ navigation, icons }) {
    
    const renderIcons = icons => {
        return icons.map((icon,index) => {
            return(
                <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={() => navigation.navigate('UserProfileScreen')}
                key={index}
            >
                <Image source={{uri:icon}} style={styles.avatar} />
            </TouchableOpacity>
            )
        })
    }
    return (
    <Card>
        <View>
        <View style={styles.viewAll}>
            <Text>
            Featured Stars
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('PartnerListScreen')}>
            <Text>
                View All
            </Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 3, flexDirection: 'row', paddingBottom: 10 }}>
            <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: 'center', marginHorizontal: 12 }}
            >
            {
                icons && renderIcons(icons)
            }
            </ScrollView>
        </View>
        </View>
    </Card>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    borderRadius: 4,
    height: 96,
    alignItems: 'center',
  },
  viewAll: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  avatar:{ height: 60, width: 60 , borderRadius:60}
});

export default FeaturedUserCell;
