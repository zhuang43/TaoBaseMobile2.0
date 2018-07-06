import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Thumbnail, ListItem } from 'native-base'

class MessageCell extends Component {
	render() {
		return (
			<ListItem style={{ alignItems: 'center' }}>
				<Thumbnail
					source={require('../assets/allen.png')}
					style={{ width: 50, height: 50 }}
				/>
				<View style={{ justifyContent: 'space-between', marginLeft: 3 }}>
					<Text style={{ fontWeight: 'normal', fontSize: 16 }}>
						{this.props.username}
					</Text>
					<Text style={{ color: '#444', marginTop: 6.5 }}>
						{this.props.message}
					</Text>
				</View>
			</ListItem>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		borderRadius: 4,
		width: '100%'
	},
	likeBar: {
		justifyContent: 'space-between'
	}
})

export default MessageCell
