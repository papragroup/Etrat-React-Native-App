
import React, { Component } from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

// import { PersianNumber } from 'react-persian';

export default class HomeScreen extends Component {
   
  
 
  render(){
    return (
      <View style={styles.mainBody}>
  
  
  
  
        <View style={styles.SectionStyle}>
          
          <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.Card}>
          <View style={styles.HeaderCard}>
            <Text style={{ color: '#cccccc', fontSize: 15, textAlign: 'right', marginTop:4  }}>تاریخ:</Text>
            
            <TouchableOpacity
               style={styles.Profile}
                  onPress={() => this.props.navigation.navigate('TransactionList')}
                >
                  {/* <Text style={{color: '#ffffff', fontSize: 15,marginTop:4}}>{this.state.user.firstName} {this.state.user.lastName} </Text> */}
                   <Image
                        source={require('../Image/TransactionList/ProfilePicturesWhiteBack.png')}
                        style={{
                            height: 30,
                            resizeMode: 'contain',
                        }}
                    />
                  
                </TouchableOpacity>
             
                  </View>
              <Text style={{textAlign:'center', fontSize:18,color:'#cccccc',marginTop:5 }}>مجموع پرداخت ها</Text>
              <View style={styles.TotalPayment}>
              
                <Text style={styles.AmountTotalPayment}>1,000,000
                <Text style={{fontFamily:'Yekan',textAlign:'center', fontSize:18,color:'#ffffff'}} >ریال</Text>
                </Text>
                
              </View>
              
            
          </View>
            <View style={styles.RowStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentType')} >
              
                <Text style={{ color: '#1e5c2e', marginTop: 6, fontSize: 20, }}>همه موارد</Text>
              </TouchableOpacity>
  
              <Text style={{fontFamily:'Yekan', color: '#1e5c2e', fontSize: 32 }}>پرداخت</Text>
  
            </View>
  
            <Text
  
              style={styles.SelectText}>
              پرداخت خود را انتخاب کنید
  </Text>
  
            <TouchableOpacity style={styles.Button}
              onPress={() => this.props.navigation.navigate('SadaghatPayment')}
            >
              <Image style={styles.ButtonIconStyle}
  
                source={require('../Image/PaymenType/SadaghatIcon.png')}
              />
              <Text style={styles.ButtonTextStyle}>صدقات</Text>
  
  
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}
              onPress={() => this.props.navigation.navigate('NozooratPayment')}
  
  
            >
              <Image style={styles.ButtonIconStyle}
  
                source={require('../Image/PaymenType/NozooratIcon.png')}
              />
              <Text style={styles.ButtonTextStyle}>نذورات</Text>
  
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}
              onPress={() => this.props.navigation.navigate('VojoohatPayment')}
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
  }
  
  
}
 
  
 



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
    marginLeft: 20,
    marginRight: 20,
  },
  Card: {
    flex: 1,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#1e5c2e',
    shadowColor: "#535353",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 15,
    


  },
  Button: {
    margin: 12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 7,
    padding: 20,
    marginTop: 27,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: "#535353",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 10



  },
  RowStyle: {
    margin: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  ButtonTextStyle: {
    
    color: '#1e5c2e',
    fontSize: 25,
    textAlign: 'center',
    fontSize: 30,
    width: '100%',
    



  },
  ButtonIconStyle: {
    marginRight: 'auto',
    width: 40,
    height: 40,


  },
  SelectText: {
    margin: 12,
    color: '#aaaaaa',
    fontSize: 15,
  },
  HeaderCard:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  TotalPayment:{
    margin: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row'
  },
  AmountTotalPayment:{
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 25,
    width: '100%',
  },
  RialTotalPayment:{
    marginRight:'auto',
    color:'#ffffff'
  },
  Profile:{
    flexDirection:'row',
    marginLeft:'auto',
    margin:6
  },

});

