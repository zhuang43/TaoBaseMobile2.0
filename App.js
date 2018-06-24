import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RootStack from './Routers/RootStack'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from "react-redux"
import userReducer from './store/reducers/userReducer'
import thunk from "redux-thunk"
import { composeWithDevTools } from "remote-redux-devtools"
import { getStatusBarHeight } from 'react-native-status-bar-height'

const store = createStore(combineReducers({ userReducer }), composeWithDevTools(applyMiddleware(thunk)))


export default () => {
  console.log(getStatusBarHeight())
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootStack />

      </View>
    </Provider>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight()
  },
});
