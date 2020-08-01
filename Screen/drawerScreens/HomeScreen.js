import React from 'react';

import { View, Text, Image, StyleSheet, ImageBackground,TouchableOpacity  } from 'react-native';

const HomeScreen = props => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../Image/Background.jpg')}>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('')}>
   <Image 
   
   
        source={require('../Image/done.png')}
        style={{
          width: '100%',
          height: 200,
        }}
     /> 
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('PaymentType')}>
   <Image 
   
   
        source={require('../Image/payment.png')}
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
export default HomeScreen;

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