import React from 'react'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';




export default class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        }
    }
    render() {
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
                </Form>
            </Container>)

    }
}

const styles = {
    container: {
        marginTop: 50
    }
}