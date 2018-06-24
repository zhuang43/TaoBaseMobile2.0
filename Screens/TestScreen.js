import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content } from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation';



class TestScreen extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.login();
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("https://www.taobase.com/api/private/recommendation/newElites/mobileapp",
        {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
      console.log(response)
      const json = await response.json();
      console.log(json)
      this.setState({ data: json })
    } catch (error) {
      console.error(error);
    }
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

  render() {

    return (
      <View style={styles.container}>
        <FlatList data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text>{item.nickname}</Text>}
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
    alignItems: 'center',
  }
})

export default TestScreen;