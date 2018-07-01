import React from 'react'
import { Container, Form, Item, Label, Text } from 'native-base'
import { Button, TextInput } from 'react-native'
import { View } from 'react-native'
import { Font } from 'expo'
import { connect } from 'react-redux'
import { login } from '../redux/actions/authentication'

export class Login extends React.Component {
	constructor(props) {
		super(props)
		this.username = null
		this.password = null
	}

	componentDidUpdate() {
		const { isLogin, navigation } = this.props
		if (isLogin) {
			navigation.navigate('MainTabNavigator')
		}
	}

	handleLogin = () => {
		const { dispatch } = this.props

		dispatch(login({ username: this.username, password: this.password }))
	}

	render() {
		if (this.state.loading) return <View />
		return (
			<Container style={styles.container}>
				{this.props.errorMessage && (
					<View style={styles.error}>
						<Text style={styles.errorText}>
							{this.props.errorMessage.message}
						</Text>
					</View>
				)}

				<Form>
					<Item stackLabel>
						<Label>Username</Label>
						<TextInput
							onChangeText={value => (this.username = value)}
							underlineColorAndroid="transparent"
							style={styles.input}
						/>
					</Item>
					<Item stackLabel>
						<Label>Password</Label>
						<TextInput
							onChangeText={value => (this.password = value)}
							underlineColorAndroid="transparent"
							secureTextEntry
							style={styles.input}
						/>
					</Item>
					<Button
						title="SIGN IN"
						color="#67BEAC"
						accessibilityLabel="SIGN IN"
						onPress={() => this.handleLogin()}
					/>
				</Form>
			</Container>
		)
	}
}
const mapStateToProps = state => ({
	isLogin: state.userReducer.isLogin,
	errorMessage: state.userReducer.errorMessage
})

export default connect(mapStateToProps)(Login)

const styles = {
	container: {
		marginTop: 50
	},
	error: {
		minHeight: 20
	},
	errorText: {
		color: 'red',
		padding: 10
	},
	input: {
		minWidth: 200,
		padding: 10
	}
}
