

//Import React and Hook we needed
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import baseUrl from "../app.json"
import NumberFormat from 'react-number-format';



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
import Loader from './Component/Loader';
import { Value } from 'react-native-reanimated';

const LoginScreen = props => {
  let [userName, setUserName] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');



  
  const handleSubmitPress = () => {

    setErrortext('');
    if (!userName) {
      alert('لطفا نام کاربری را وارد کنید');
      return;
    }
    if (!userPassword) {
      alert('لطفا کلمه عبور را وارد کنید');
      return;
    }
    setLoading(true);
    var dataToSend = { username: userName, password: userPassword };
    fetch(baseUrl.baseUrl.concat('/api/authenticate'), {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        //Header Defination
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    
    .then(responseJson => {
      //Hide Loader
      setLoading(false);
      if (responseJson.status >= 400) {

        setErrortext('نام کاربری یا کلمه عبور اشتباه است!');



      } else {
        props.navigation.navigate('HomeScreen');
      }
      const token = responseJson.id_token;
      mergeUsers(responseJson);

    })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });


  };

  mergeUsers = async (token) => {

    //save first user
    await AsyncStorage.setItem('@MyApp_user', JSON.stringify(token))

  }


  return (
    <View style={styles.mainBody}>

      <Loader loading={loading} />
      <View style={styles.SectionStyle}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Image
            source={require('./Image/logo.png')}
            style={{
              width: '100%',
              height: 230,
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.SloganStyle}>عترت خانه سادات است</Text>
          
          <TextInput
            style={styles.inputStyle}
            onChangeText={UserName => setUserName(UserName)}
            placeholder="نام کاربری"
            placeholderTextColor="#F6F6F7"
            autoCapitalize="none"
            keyboardType="default"

            returnKeyType="next"
            // onSubmitEditing={() =>
            //   this._passwordinput && this._passwordinput.focus()
            // }
            blurOnSubmit={false}
          />
          {/* <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
          <TextInput
            style={styles.inputStyle}
            onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="کلمه عبور"
            placeholderTextColor="#F6F6F7"
            keyboardType="default"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}

          />


          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}

<View style={styles.ForgetPasswordStyle}>
            <TouchableOpacity 
            
            onPress={() => props.navigation.navigate('ResetPassword')}
            >
            
              <Text style={{ fontFamily: "IRANSans_Bold", color: '#ffffff' }}>بازیابی رمز عبور</Text>
            </TouchableOpacity>

            <Text style={{ fontFamily: "IRANSans", color: '#aaaaaa', marginLeft: 4, marginTop: 2 }}>رمز عبور خود را فرموش کرده اید ؟</Text>

          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
            disabled={!handleSubmitPress}
          >
            <Text style={styles.buttonTextStyle}>ورود</Text>
          </TouchableOpacity>
          <Text style={styles.border}></Text>
          <TouchableOpacity
            style={styles.GuestbuttonStyle}
            onPress={() => props.navigation.navigate('OTPScreen')}
            // activeOpacity={0.5}
            // onPress={handleSubmitPress}
            // disabled={!handleSubmitPress}
          >
            <Text style={styles.GuestbuttonTextStyle}>مهمان</Text>
          </TouchableOpacity>
        


        </ScrollView>

      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1e5c2e',

  },
  SectionStyle: {

    flex: 1,
    height: 40,
    marginTop: 30,
    marginLeft: 35,
    marginRight: 35
  },
  inputStyle: {
    margin: 12,
    color: 'white',
    borderBottomWidth: 2,
    borderRadius: 0,
    borderColor: 'white',
    textAlign: 'right',
    fontFamily:'IRANSansFaNum',
  },
  errorTextStyle: {
    margin: 12,
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: "IRANSans_Bold"
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
  ForgetPasswordStyle: {
    margin: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
  },
  GuestbuttonStyle: {
    margin: 12,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor:'#fff',
    alignItems: 'center',
    borderRadius: 7,
    padding: 8,
    marginTop: 27,
  },
  GuestbuttonTextStyle:{
    color: '#ffffff',
    fontSize: 22,
    fontFamily: "IRANSans"
  },
  border:{
    flex:1,
    borderBottomWidth:1,
    borderColor:'#ffffff',
    marginRight:12,
    marginLeft:12
  },
  SloganStyle:{
    textAlign:'center',
    color:'#ffffff',
    fontSize:18,
    fontFamily: "IRANSans",
    marginTop:20,
  }

});