import React from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { View } from 'react-native'
import { Font, AppLoading } from "expo";



export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    handleLogin = (e) => {
        e.preventDefault()
        this.props.navigation.navigate('MainTabNavigator')
    }

    render() {
        if (this.state.loading) return <View></View>
        return (
            <Container style={styles.container}>
                <Form>
                    <Item stackLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item stackLabel>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Button full success onPress={this.handleLogin}>
                        <Text>Sign in</Text>
                    </Button>
                </Form>
            </Container>)

    }
}

const styles = {
    container: {
        marginTop: 50
    }
}