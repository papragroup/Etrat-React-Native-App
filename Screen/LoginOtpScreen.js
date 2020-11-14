import React, { Component } from "react";
import baseUrl from "../app.json"
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AsyncStorage from '@react-native-community/async-storage';
import CountDown from 'react-native-countdown-component';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default class OTPScreen extends Component {

  constructor(props) {
    super();
    this.state = {
      text: "Hello"
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getToken = async (test) => {
    phone = await AsyncStorage.getItem('@phone');
    await this.onPress(phone);
  }

  handleChange(typedText) {
    console.log(typedText);
    this.state.otp = typedText

  };

  


  onPress = (phone) => {
    fetch(baseUrl.baseUrl.concat('/api/verify?otp=').concat(this.state.otp).concat("&phone-number=").concat(phone), {
      method: 'GET',
      headers: {
        //Header Defination
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
      .then(responseJson => {
        //Hide Loader

        if (responseJson.status >= 400) {

          alert('کد وارد شده صحیح نمیباشد');



        } else {
          this.props.navigation.navigate('HomeScreen');
        }
        const token = responseJson.id_token;
        mergeUsers(responseJson);

      })
      .catch(error => {
        //Hide Loader
        console.error(error);
      });



  }
  endCountDown = () =>{
    alert('end')
      }

  mergeUsers = async (token) => {

    //save first user
    await AsyncStorage.setItem('@MyApp_user', JSON.stringify(token))

  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  render() {

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
          <ScrollView keyboardShouldPersistTaps="handled">


            <Image
              source={require('./Image/LoginOtpScreenIcon.png')}
              style={{
                width: '100%',
                height: 150,
                resizeMode: 'contain',
                marginBottom: 10,
              }}
            />


            {/* <TouchableOpacity style={{marginTop: 30}} onPress={() => { this.setState({code: ""})}}> 
          <Text>Resend</Text>
        </TouchableOpacity> */}

            <OTPInputView
              onChangeText={this.handleChange}
              style={styles.OtpInputStyle}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code => {
                console.log(`Code is ${code}, you are good to go!`)
                this.handleChange(code)
              })}


            />
            <CountDown
              until={60 * 2 + 0}
              size={20}
              onFinish={() => this.endCountDown}
              digitStyle={{ backgroundColor: '#FFF' }}
              digitTxtStyle={{ color: '#1e5c2e'}}
              timeToShow={['M', 'S']}
              timeLabels={{ m: 'دقیقه', s: 'ثانیه' }}
              timeLabelStyle={{ color: '#FFF',fontFamily:'IRANSans' }}
            />


{/* 
            <View style={styles.ResendthCode}>
              <TouchableOpacity >

                <Text style={{ fontFamily: "IRANSans_Bold", color: '#ffffff' }}
                
                onPress={this.onPressReturnCode}
                >ارسال مجدد کد</Text>
              </TouchableOpacity>

              <Text style={{ fontFamily: "IRANSans", color: '#aaaaaa', marginLeft: 4, marginTop: 2 }}>   کد را دریافت نکرده اید ؟</Text>

            </View> */}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={this.getToken}
            >
              <Text style={styles.buttonTextStyle}>ورود</Text>
            </TouchableOpacity>
          </ScrollView>
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
  ResendthCode: {
    marginTop: 80,
    margin: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
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
  OtpInputStyle: {
    marginTop: 80,
    margin: 12,
    flexDirection: 'row',

  },

  underlineStyleBase: {
    width: 70,
    height: 70,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 7,
    color: '#000',
    fontSize: 22,
    fontFamily: 'IRANSansFaNum'
  },
});


