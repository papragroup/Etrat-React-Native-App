import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Linking,
  Style,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { Value } from "react-native-reanimated";
import AsyncStorage from "@react-native-community/async-storage";
export default class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TextInputValue: '',
      
    }
    
  }
  
  
  buttonClickListener = () => {
    this.Hello(this.getTokenBackend)
  }
  getTokenBackend = (token) => {
    const { TextInputValue } = this.state;
    var header = 'Bearer '.concat(token);
    console.log('Bearer '.concat(token));
    fetch('http://192.168.101.221:8080/api/transactions/code'.concat('?amount=').concat(TextInputValue).concat('&type-id= 00'), {
      method: 'GET',
      headers: {
        'Authorization': header,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var url = 'http://192.168.101.221:8080/gateway/payment?code='.concat(responseJson.token)
        Linking.openURL(url);
        console.log(responseJson);
        this.setState({
          data: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }


  Hello = async (test) => {
    token = await AsyncStorage.getItem('@MyApp_user');
    obj = JSON.parse(token);
    this.getTokenBackend(obj.id_token);
  }
  state = {
    TextInputValue: ''
  }

  onPress = () => {
    this.setState({
      TextInputValue: '10000'
    })
  }
  onPressButton = () => {
    this.setState({
      TextInputValue: '20000'
    })
  }
  onPressButtonTow = () => {
    this.setState({
      TextInputValue: '30000'
    })
  }
  onPressButtonThree = () => {
    this.setState({
      TextInputValue: '40000'
    })
  }
  onPressButtonFour = () => {
    this.setState({
      TextInputValue: '50000'
    })
  }
  onPressButtonFive = () => {
    this.setState({
      TextInputValue: '60000'
    })
  }
  render() {
    return (

      <View style={styles.mainBody}>



        <View style={styles.SectionStyle}>
          <KeyboardAvoidingView enabled>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.Card}>
            
              
                <Image style={styles.NozooratCardIcon}

                  source={require('../Image/PaymentNozoorat/NozooratCardIcon.png')}
                >
                </Image>
                <Text style={styles.CardText}>وجوهات شرعی</Text>

              </View>

              <Text

                style={styles.SelectText}>
                مبلغ خود را انتخاب کنید (تومان)
</Text>

              <TextInput
        
                style={styles.inputStyle}
                // Adding hint in TextInput using Placeholder option.
                placeholder="مبلغ دلخواه"
                //set the value in state.
                onChangeText={TextInputValue => this.setState({ TextInputValue })}
                // Making the Under line Transparent.

              >


                {this.state.TextInputValue}
              </TextInput>
              <View
                style={styles.AmountOneRow}
              >

                <TouchableOpacity
                  onPress={this.onPress}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonTextStyle}>10,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPressButton}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonTextStyle}>20,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPressButtonTow}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonTextStyle}>30,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
              </View>
              <View
                style={styles.AmountTwoRow}
              >

                <TouchableOpacity
                  style={styles.AmountButton}
                  onPress={this.onPressButtonThree}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonTextStyle}>40,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPressButtonFour}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonTextStyle}>50,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPressButtonFive}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonTextStyle}>60,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>

              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={this.buttonClickListener}>
                <Text style={styles.buttonTextStyle}>پرداخت</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>

        </View>






      </View>
    )
  }

};


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
    marginLeft: 20,
    marginRight: 20,
    margin: 6,
  },
  Card: {
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#f5cf53',
    shadowColor: "#53535353",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3,
    elevation: 1.5,

  },
  SelectText: {
    margin:12,
    flex: 1,
    textAlign: 'right',
    color: '#aaaaaa',
    fontSize: 15
  },
  inputStyle: {
    margin:12,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 7,
    padding: 20,
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
  AmountOneRow: {
    flexDirection: 'row',
  },
  AmountTwoRow: {
    flexDirection: 'row',
  },
  AmountButton: {
    margin:12,
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 7,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    flex: 1,
    color: '#000',
    shadowColor: "#53535353",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3,
    elevation: 1.5,
  },
  AmountButtonTextStyle: {
    color: '#1e5c2e',
    fontSize: 20,
    marginTop: 15
  },
  buttonStyle: {
    margin:12,
    backgroundColor: '#26d142',
    borderWidth: 0,
    color: '#ffffff',
    alignItems: 'center',
    borderRadius: 7,
    padding: 10,
    marginTop: 27,
  },
  buttonTextStyle: {
    color: '#ffffff',
    fontSize: 25,
  },

  NozooratCardIcon: {
    marginRight: 'auto',
  },

  CardText:{
    color:'#fff',
    fontSize:30,
    marginBottom:10
  },
  BackIcon:{
    marginRight:'auto',
    margin:3,
  }

});
