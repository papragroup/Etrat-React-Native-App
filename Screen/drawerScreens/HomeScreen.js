
import React from 'react';

import { View, Text, Image, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = props => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={styles.mainBody}>
      

        <View style={styles.SectionStyle}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Text style={styles.HeaderText}>پرداخت</Text>
          <Text

            style={styles.SelectText}>
            پرداخت خود را انتخاب کنید
</Text>

          <TouchableOpacity style={styles.Button}
            onPress={() => props.navigation.navigate('Payment')}
          >
            <Image style={styles.ButtonIconStyle}

              source={require('../Image/PaymenType/SadaghatIcon.png')}
            />
            <Text style={styles.ButtonTextStyle}>صدقات</Text>


          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}
            onPress={() => props.navigation.navigate('Payment')}


          >
            <Image style={styles.ButtonIconStyle}

              source={require('../Image/PaymenType/NozooratIcon.png')}
            />
            <Text style={styles.ButtonTextStyle}>نذورات</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}
            onPress={() => props.navigation.navigate('Payment')}
          >
            <Image style={styles.ButtonIconStyle}

              source={require('../Image/PaymenType/VojoohatIcon.png')}
            />
            <Text style={styles.ButtonTextStyle}>وجوهات شرعی</Text>
          </TouchableOpacity>
          </ScrollView>
         
        </View>
     

    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    textAlign: 'right',

  },
  SectionStyle: {
    flex: 1,
    height: 40,
    marginTop: 8,
    marginLeft: 35,
    marginRight: 35,
  },
  Button: {
    margin:12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 7,
    padding: 20,
    marginTop: 27,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: "#53535353",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3,
    elevation: 1.5,



  },
  HeaderText: {
    margin:12,
    textAlign: 'center',
    color: '#1e5c2e',
    fontSize: 40,
  },
  ButtonTextStyle: {
    color: '#1e5c2e',
    fontSize: 25,
    textAlign: 'center'



  },
  ButtonIconStyle: {
    marginRight: 'auto',
    width: 40,
    height: 40,


  },
  SelectText: {
    margin:12,
    marginTop: 27,
    color: '#aaaaaa',
    fontSize:15,
  },
 
});

