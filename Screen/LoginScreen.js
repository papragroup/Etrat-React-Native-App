// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React and Hook we needed
// import React, { useState } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';

// //Import all required component
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   ScrollView,
//   Image,
//   ImageBackground,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
// } from 'react-native';
// import Loader from './Component/Loader';

// const LoginScreen = props => {
//   let [userName, setUserName] = useState('');
//   let [userPassword, setUserPassword] = useState('');
//   let [loading, setLoading] = useState(false);
//   let [errortext, setErrortext] = useState('');

//   const handleSubmitPress = () => {
//     setErrortext('');
//     if (!userName) {
//       alert('لطفا نام کاربری را وارد کنید');
//       return;
//     }
//     if (!userPassword) {
//       alert('لطفا پسورد را وارد کنید');
//       return;
//     }
//     setLoading(true);
//     var dataToSend = { username: userName, password: userPassword };

//     fetch('http://192.168.101.221:8080/api/authenticate', {
//       method: 'POST',
//       body: JSON.stringify(dataToSend),
//       headers: {
//         //Header Defination
//         'Content-Type': 'application/json',
//       },
//     }).then(response => response.json())
//       .then(responseJson => {
//         //Hide Loader
//         setLoading(false);
//         if (responseJson.status >= 400) {

//           setErrortext('نام کاربری یا کلمه عبور اشتباه است!');



//         } else {
//           props.navigation.navigate('HomeScreen');
//         }
//         const token = responseJson.id_token;
//         mergeUsers(responseJson);

//       })
//       .catch(error => {
//         //Hide Loader
//         setLoading(false);
//         console.error(error);
//       });


//   };

//   mergeUsers = async (token) => {

//     //save first user
//     await AsyncStorage.setItem('@MyApp_user', JSON.stringify(token))

//   }


//   return (
//     <View style={styles.mainBody}>
//       <Loader loading={loading} />
//       <ScrollView keyboardShouldPersistTaps="handled">
//         <View style={{ marginTop: 100 }}>
//           <KeyboardAvoidingView enabled>
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={require('./Image/logo.png')}
//                 style={{
//                   width: '50%',
//                   height: 230,
//                   resizeMode: 'contain',
//                   margin: 30,
//                 }}
//               />
//             </View>
//             <View style={styles.SectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={UserName => setUserName(UserName)}
//                 placeholder="نام کاربری"
//                 placeholderTextColor="#F6F6F7"
//                 autoCapitalize="none"
//                 keyboardType="default"

//                 returnKeyType="next"
//                 onSubmitEditing={() =>
//                   this._passwordinput && this._passwordinput.focus()
//                 }
//                 blurOnSubmit={false}
//               />
//             </View>
//             <View style={styles.SectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={UserPassword => setUserPassword(UserPassword)}
//                 placeholder="کلمه عبور"
//                 placeholderTextColor="#F6F6F7"
//                 keyboardType="default"
//                 onSubmitEditing={Keyboard.dismiss}
//                 blurOnSubmit={false}
//                 secureTextEntry={true}
//               />
//             </View>
//             {errortext != '' ? (
//               <Text style={styles.errorTextStyle}> {errortext} </Text>
//             ) : null}
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.5}
//               onPress={handleSubmitPress}>
//               <Text style={styles.buttonTextStyle}>ورود</Text>
//             </TouchableOpacity>


//           </KeyboardAvoidingView>

//         </View>
//         {/* <View style={styles.SectionStyle}> */}
//              <View style={styles.ForgetPasswordStyle}>
//              <TouchableOpacity >
//               <Text style={{ color: '#ffffff' , fontSize:18 }}>بازیابی رمز عبور</Text>
//               </TouchableOpacity>
//               <Text style={{ color: '#cccccc' , margin:4}}>رمز عبور خود را فرموش کرده اید ؟</Text>
//              {/* </View> */}

//            </View>


//       </ScrollView>

//     </View>
//   );
// };
// export default LoginScreen;

// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#1e5c2e',

//   },

//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,


//   },
//   buttonStyle: {
//     marginLeft: 35,
//     marginRight: 35,
//     backgroundColor: '#ffffff',
//     borderWidth: 0,
//     color: '#ffffff',
//     alignItems: 'center',
//     borderRadius: 16,
//     padding: 15,
//     marginTop: 27,
//   },

//   buttonTextStyle: {
//     color: '#1e5c2e',
//     fontSize: 25,
//   },
//   inputStyle: {
//     flex: 1,
//     color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderBottomWidth: 2,
//     borderRadius: 0,
//     borderColor: 'white',
//     textAlign: 'right'
//   },
//   registerTextStyle: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     justifyContent: "center",
//     alignItems: "center",
//     opacity: 0.7
//   },

// ForgetPasswordStyle:{
//   flex:1,
//   flexDirection:'row',
//   textAlign: 'center', // <-- the magic
//     fontWeight: 'bold',
//     fontSize: 18,
//     marginTop: 0,
//     width: 200,
// }
// });







/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hook we needed
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

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
      alert('لطفا پسورد را وارد کنید');
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
        <TextInput
          style={styles.inputStyle}
          onChangeText={UserName => setUserName(UserName)}
          placeholder="نام کاربری"
          placeholderTextColor="#F6F6F7"
          autoCapitalize="none"
          keyboardType="default"

          returnKeyType="next"
          onSubmitEditing={() =>
            this._passwordinput && this._passwordinput.focus()
          }
          blurOnSubmit={false}
        />
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
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleSubmitPress}>
          <Text style={styles.buttonTextStyle}>ورود</Text>
        </TouchableOpacity>
        <View style={styles.ForgetPasswordStyle}>
          <TouchableOpacity >

            <Text style={{ color: '#ffffff', fontSize: 18 }}>بازیابی رمز عبور</Text>
          </TouchableOpacity>

          <Text style={{ color: '#cccccc', margin: 4 }}>رمز عبور خود را فرموش کرده اید ؟</Text>

        </View>



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
    marginTop: 100,
    marginLeft: 35,
    marginRight: 35
  },
  inputStyle: {
    margin: 12,

    color: 'white',
    borderBottomWidth: 2,
    borderRadius: 0,
    borderColor: 'white',
    textAlign: 'right'
  },
  errorTextStyle: {
    margin: 12,

    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  buttonStyle: {
    margin: 12,
    backgroundColor: '#ffffff',
    borderWidth: 0,
    alignItems: 'center',
    borderRadius: 16,
    padding: 15,
    marginTop: 27,
  },

  buttonTextStyle: {
    color: '#1e5c2e',
    fontSize: 25,
  },
  ForgetPasswordStyle: {
    margin: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row'

  }
});