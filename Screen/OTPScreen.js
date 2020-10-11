
import React, { Component } from "react";
import baseUrl from "../app.json"
import AsyncStorage from '@react-native-community/async-storage';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput ,KeyboardAvoidingView} from 'react-native';

export default class OTPScreen extends Component {


    constructor(props) {
        super();
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            text: "Hello "
        };
        this.handleChange = this.handleChange.bind(this);
    }
    onPress = () => {
        // this.props.navigation.navigate('LoginOtpScreen');
        this.mergeUsers();
        fetch(baseUrl.baseUrl.concat('/api/send-otp?phone-number=').concat(this.state.phone), {
            method: 'GET'
            
            //Request Type 
        })

            .then(response =>{
                console.log(response.status);
            //If response is in json then in success

            if (response != 200) {
                this.props.navigation.navigate('LoginOtpScreen');
                
                
              } else  {
                alert('شماره همراه شما معتبر نمیباشد');
              }
            }
            )
    };
    handleChange (typedText) {
        console.log("update => ", typedText);
        this.state.phone=typedText

    };



    mergeUsers = async (phone) => {

        //save first user
        await AsyncStorage.setItem('@phone', this.state.phone)
    
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
                        source={require('./Image/OTPScreenIcon.png')}
                        style={{
                            width: '100%',
                            height: 150,
                            resizeMode: 'contain',
                        }}
                    />
                    <Text style={styles.VerifyMobileTextStyle}>شماره موبایل خود را وارد نمایید{"\n"} تا کد فعال سازی برای شما ارسال شود</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="شماره موبایل خود را وارد کنید"
                        placeholderTextColor="#F6F6F7"
                        keyboardType="default"

                        onChangeText={this.handleChange}

                    />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={this.onPress}

                    >
                        <Text style={styles.buttonTextStyle}>ارسال</Text>
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
        textAlign: "center",
        fontFamily: 'IRANSans',
        marginTop: 60
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
        fontFamily: "IRANSans"
    },
});


