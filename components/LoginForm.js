import React from "react";
import { Text, View, TextInput, StyleSheet, Button, KeyboardAvoidingView } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { loginUser } from "../lib/auth";


class LoginForm extends React.Component {
    state = {
        username: "ZERIX",
        password: "123456",
        loginUser: false
    }

    componentDidMount() {
        if (this.state.loginUser) {
            //this.props.navigation.navigate("MainPage")
        }
    }


    submitLogin = async () => {
        console.log("Login button pressed");
        let username = this.state.username;
        let password = this.state.password;
        let data = await loginUser(username, password);

        if (data.success) {
            console.log("Login success");
            this.setState({ loginUser: true })
            this.props.navigation.navigate("MainPage")
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading1}>Anomoly</Text>
                <TextInput placeholder="Username" style={styles.input} name="username" id="username"
                    ref={(el) => { this.username = el; }}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                ></TextInput>
                <TextInput placeholder="Password" style={styles.input} name="password" id="password"
                    ref={(el) => { this.password = el; }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}>
                </TextInput>
                <Button onPress={this.submitLogin} style={styles.buttons} title="Login"></Button>
                <KeyboardAvoidingView behavior="padding">
                </KeyboardAvoidingView>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        width: 200,
        marginTop: 10,
        borderRadius: 5
    },
    buttons: {
        marginTop: 10,
        width: 200,
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 1,
        color: '#000',
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading1: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})






export default LoginForm;