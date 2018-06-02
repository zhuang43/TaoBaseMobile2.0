import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';



class TestScreen extends Component {
  state = {
    data: []
  };

  componentWillMount(){
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=10");
    const json = await response.json();
    this.setState({data: json.results})
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList data={this.state.data}
        keyExtractor={(x, i) => i}
        renderItem={({item}) => 
        <Text>{item.name.first}</Text>}
      />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 10,
    borderRadius: 4,
    height: 96,
    width: null,
    alignItems: 'center',
  }
})

export default TestScreen;