
import React, { Component } from "react";
import baseUrl from "../app.json"
import AsyncStorage from '@react-native-community/async-storage';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput ,KeyboardAvoidingView,Keyboard} from 'react-native';

export default class OTPScreen extends Component {

    constructor(props) {
        super();
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        
        this.state = {
            
            password: '',
            confirmPassword: '',
            
        }
        
        this.handleSubmit = () => {
            console.log(password);
            const { password, confirmPassword } = this.state;
            // perform all neccassary validations
            if (password !== confirmPassword) {
                alert("Passwords don't match");
            } else {
                // make API call
            }
        }
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    render() {
        const keyboardVerticalOffset = Platform.OS === 'android' ? 70 : 0
        return (
            <View style={styles.mainBody}>
                <TouchableOpacity onPress={this.handleBackButtonClick}>
                    <Image
                        source={require('./Image/BackIconWhite.png')}
                        style={{
                            width: 30,
                            height: 30,
                            resizeMode: 'contain',
                            marginRight: 'auto',
                            marginTop: 7,
                        }}
                    />

                </TouchableOpacity>


                <View style={styles.SectionStyle}>

                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>


                    <Image
                        source={require('./Image/ResetPasswordIcon.png')}
                        style={{
                            width: '100%',
                            height: 150,
                            resizeMode: 'contain',
                            marginBottom:80,
                        }}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="رمز عبور جدید"
                        placeholderTextColor="#F6F6F7"
                        keyboardType="default"
                        secureTextEntry={true}
                        onChange={this.state.password}
                    />
                      <TextInput
                        style={styles.inputStyle}
                        placeholder="تکرار رمز عبور"
                        placeholderTextColor="#F6F6F7"
                        keyboardType="default"
                        secureTextEntry={true} 
                        onChange={this.state.confirmPassword}
                    />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={this.handleSubmit}
                    >
                        <Text style={styles.buttonTextStyle}>تایید</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>  
                </View>
                   
            </View>
           

        );
    };

}



const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1e5c2e',

    },
    SectionStyle: {
        flex: 1,
        height: 40,
        marginTop: 100,
        marginLeft: 35,
        marginRight: 35
    },
    VerifyMobileTextStyle: {
        fontSize: 15,
        color: '#ffffff',
        fontFamily: 'IRANSans',
        textAlign: 'center',
        marginTop: 100,
    },
    inputStyle: {
        margin: 12,
        color: 'white',
        borderBottomWidth: 2,
        borderRadius: 0,
        borderColor: 'white',
        fontFamily: 'IRANSans',
        textAlign:'right'
    },
    buttonStyle: {
        margin: 12,
        backgroundColor: '#ffffff',
        borderWidth: 0,
        alignItems: 'center',
        borderRadius: 7,
        padding: 15,
        marginTop: 27,
    },

    buttonTextStyle: {
        color: '#1e5c2e',
        fontSize: 22,
        fontFamily: "IRANSans",
        
    },
});


