import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Card, CardItem } from 'native-base'

class PremiumCell extends Component {
	render() {
		return (
			<Card
				style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
				<CardItem style={{ flex: 1 }}>
					<TouchableOpacity>
						<Text
							style={{ fontWeight: 'normal', color: '#EEAA2C', fontSize: 16 }}>
							Premiums
						</Text>
					</TouchableOpacity>
					<Text> have free business referral services!</Text>
				</CardItem>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 4,
		height: 215,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 23
	}
})

export default PremiumCell
