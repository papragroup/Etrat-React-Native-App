/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text, Image, StyleSheet, ImageBackground,TouchableOpacity  } from 'react-native';

const PaymentType = props => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../Image/Background.jpg')}>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Payment')}>
   <Image 
   
   
        source={require('../Image/sadaghat.png')}
        style={{
          width: '100%',
          height: 200,
        }}
     /> 
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Payment')}>
   <Image 
   
   
        source={require('../Image/nozoorat.png')}
        style={{
          width: '100%',
          height: 200,
        }}
     /> 
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Payment')}>
   <Image 
   
   
        source={require('../Image/vojoohat.png')}
        style={{
          width: '100%',
          height: 200,
        }}
     /> 
     </TouchableOpacity>
      
      

      </ImageBackground>
    
    </View>
  );
};
export default PaymentType;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e5c2e',
    padding:12
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7
  },
  button: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    
  },

});