import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card, CardItem, Thumbnail } from 'native-base'

class FriendCell extends Component {
	render() {
		return (
			<Card>
				<CardItem style={{ alignItems: 'center' }}>
					<Thumbnail
						source={require('../assets/allen.png')}
						style={{ width: 60, height: 60 }}
					/>
					<View>
						<Text style={{ fontWeight: 'normal', fontSize: 16 }}>
							Brett Napoli{' '}
						</Text>
						<Text style={{ color: '#444' }}>
							We are looking for marketing specialist
						</Text>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								paddingTop: 3,
								opacity: 0.7
							}}>
							<Image
								source={require('../assets/briefcase.png')}
								style={{ height: 11, width: 11 }}
							/>
							<Text style={{ paddingLeft: 5, fontSize: 13 }}>Yahoo</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								opacity: 0.7,
								paddingBottom: 5
							}}>
							<Image
								source={require('../assets/map-pin.png')}
								style={{ height: 13, width: 11 }}
							/>
							<Text style={{ paddingLeft: 5, fontSize: 13 }}>
								San Francisco, CA
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }} />
					</View>
				</CardItem>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		borderRadius: 4,
		width: null
	},
	likeBar: {
		justifyContent: 'space-between'
	}
})

export default FriendCell
