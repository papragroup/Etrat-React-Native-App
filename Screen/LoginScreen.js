/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hook we needed
import React, { useState } from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from './Component/Loader';

const LoginScreen = props => {
  let [userName, setUserName] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    var dataToSend = { username: userName, password: userPassword };

    fetch('http://192.168.101.221:8080/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        //Header Defination
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
      if (responseJson.status >= 400  ) {
        
        setErrortext('نام کاربری یا کلمه عبور اشتباه است!');
     
          
        
        } else {
          props.navigation.navigate('HomeScreen');
        }
       
      
        
        console.log(responseJson);
       
       
        
        // If server response message same as Data Matched
        // if (responseJson.status == 200) {
        //   AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
        //   console.log(responseJson.data[0].user_id);
          // props.navigation.navigate('HomeScreen');
        
        // } else {
        //   setErrortext('Please check your email id or password');
        //   console.log('Please check your email id or password');
        // }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
     
     
     {/* <ImageBackground style={styles.backgroundImage} source={require('../Screen/Image/LoginBackground.jpg')}> */}
      
      <Loader loading={loading} />

      <ScrollView keyboardShouldPersistTaps="handled">
     
        <View style={{ marginTop: 100 }}>
        {/* <ImageBackground style={styles.backgroundImage} source={require('./Image/BackgroundLogin.jpg')}> */}
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../Image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 150,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setUserName(UserName)}
                // underlineColorAndroid="#FFFFFF"
                placeholder="نام کاربری" //dummy@abc.com
                placeholderTextColor="#F6F6F7"
                autoCapitalize="none"
                keyboardType="default"
              
                returnKeyType="next"
                onSubmitEditing={() =>
                  this._passwordinput && this._passwordinput.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                // underlineColorAndroid="#FFFFFF"
                placeholder="کلمه عبور" 
                placeholderTextColor="#F6F6F7"
                keyboardType="default"
                ref={ref => {
                  this._passwordinput = ref;
                }}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>ورود</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.navigate('RegisterScreen')}>
            ثبت نام کنید!
            </Text>
          </KeyboardAvoidingView>
     
          
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1e5c2e',
    textAlign:'right',
  },

  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    color: '#1e5c2e',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#1e5c2e',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 0,
    borderColor: 'white',
    textAlign:'right'
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
  },


});