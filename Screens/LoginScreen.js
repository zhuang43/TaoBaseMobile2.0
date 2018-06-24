import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text } from 'native-base';
import { Button, TextInput } from 'react-native';
import { View } from 'react-native';
import { Font, AppLoading } from 'expo';
import { login } from '../store/actions/authendication';
import { connect } from 'react-redux';

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
		this.username = null;
		this.password = null;
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		});
		this.setState({ loading: false });
	}
	componentDidUpdate({ isLogin: prevIsLogin }) {
		const { isLogin, navigation } = this.props;
		if (!prevIsLogin && isLogin) {
			navigation.navigate('MainTabNavigator');
		}
	}
	handleLogin = () => {
		const { dispatch, navigation } = this.props;

		dispatch(login({ username: this.username, password: this.password }));
	};

	render() {
		if (this.state.loading) return <View />;
		return (
			<Container style={styles.container}>
				{this.props.errorMessage && (
					<View style={styles.error}>
						<Text style={styles.errorText}>{this.props.errorMessage.message}</Text>
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
							secureTextEntry={true}
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
		);
	}
}
const mapStateToProps = state => {
	return {
		isLogin: state.userReducer.isLogin,
		errorMessage: state.userReducer.errorMessage,
	};
};

export default connect(mapStateToProps)(Login);

const styles = {
	container: {
		marginTop: 50,
	},
	error: {
		minHeight: 20,
	},
	errorText: {
		color: 'red',
		padding: 10,
	},
	input: {
		minWidth: 200,
		padding: 10,
	},
};
