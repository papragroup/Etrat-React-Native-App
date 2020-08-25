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
  NumricInput
} from "react-native";

import { Value } from "react-native-reanimated";
import AsyncStorage from "@react-native-community/async-storage";
export default class VojoohatPayment extends Component {
  
  
  constructor(props) {
    super(props)
    this.state={
      data:'',
      user:''
    }
    this.initUser()
  }

  setUserData(userdata){
this.setState({user:userdata})
  }
  fetchdata(token){
    var header = 'Bearer '.concat(token);
    fetch('http://192.168.101.221:8080/api/user',{
        method: 'GET',
        headers: {
            'Authorization': header,
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
            this.setState({ user: responseJson });
        })
        .catch((error) => {
            console.error(error);
        });
  }
  initUser = async (test) => {
    token = await AsyncStorage.getItem('@MyApp_user');
    obj = JSON.parse(token);
    await this.fetchdata(obj.id_token);
}



  buttonClickListener = () => {
    this.Hello(this.getTokenBackend)
  }
  getTokenBackend = (token) => {
    const { TextInputValue } = this.state;
    var header = 'Bearer '.concat(token);
    fetch('http://192.168.101.221:8080/api/transactions/code'.concat('?amount=').concat(TextInputValue).concat('&type-id=14'), {
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
               
               <TouchableOpacity
               style={styles.Profile}
                  onPress={() => this.props.navigation.navigate('TransactionList')}
                >
                  <Text style={{color: '#ffffff', fontSize: 15,marginTop:4}}>{this.state.user.firstName} {this.state.user.lastName}</Text>
                   <Image
                        source={require('../Image/TransactionList/ProfilePicturesWhiteBack.png')}
                        style={{
                            height: 30,
                            resizeMode: 'contain',
                        }}
                    />
                  
                </TouchableOpacity>
               
               
             
                
                
                <View style={styles.RowIconAmount}>


                  <Image style={styles.NozooratCardIcon}

                    source={require('../Image/PaymentNozoorat/VojoohatCardIcon.png')}
                  >
                  </Image>
                  <Text
                    style={styles.AmountCard}

                    onChangeText={TextInputValue => this.setState({ TextInputValue  } +'تومان')}

                  >
                    
                    {this.state.TextInputValue}
                  </Text>
                </View>

                <View style={styles.CardText}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SadaghatPayment')}> 
      <Text style={styles.SadaghatCardText}>صدقات</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('NozooratPayment')}> 
      <Text style={styles.NozooratCardText}>نذورات</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('VojoohatPayment')}> 
      <Text style={styles.vojoohatCardText}>وجوهات شرعی</Text>
      </TouchableOpacity>
                  
                </View>

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
  },

  SectionStyle: {
    flex: 1,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    margin: 6,
  },
  Card: {
    flex: 1,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#f5cf53',
    shadowColor: "#535353",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 15,

  },
  SelectText: {
    margin: 12,
    flex: 1,

    color: '#aaaaaa',
    fontSize: 15
  },
  inputStyle: {
    margin: 12,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 7,
    padding: 20,
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
  AmountOneRow: {
    flexDirection: 'row',
  },
  AmountTwoRow: {
    flexDirection: 'row',
  },
  AmountButton: {
    margin: 12,
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
    shadowColor: "#535353",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 10,
  },
  AmountButtonTextStyle: {
    color: '#1e5c2e',
    fontSize: 20,
    marginTop: 15
  },
  buttonStyle: {
    margin: 12,
    backgroundColor: '#26d142',
    borderWidth: 0,
    color: '#ffffff',
    alignItems: 'center',
    borderRadius: 7,
    padding: 12,
    marginTop: 27,
  },
  buttonTextStyle: {
    color: '#ffffff',
    fontSize: 25,
  },

  NozooratCardIcon: {
    marginRight: 'auto'

  },

  CardText: {
  flexDirection:'row',
  marginLeft:'auto',
  marginRight:'auto'
  },
  BackIcon: {
    marginRight: 'auto',
    margin: 3,
  },
  RowIconAmount: {
    flexDirection: 'row',
    marginRight: 'auto'

  },
  AmountCard: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 40,
    marginTop: 0,
    width: '100%',
  },
  Profile:{
    flexDirection:'row',
    marginLeft:'auto',
    margin:6
  },
   vojoohatCardText:{
    color: '#ffffff',
    fontSize:30,
    marginLeft:10
  },
   NozooratCardText:{
    color: '#ffffff',
    fontSize:15,
    marginTop:15,
    marginLeft:10
  },
  SadaghatCardText:{
    color: '#ffffff',
    fontSize:15,
    marginTop:15,
    marginLeft:10
  }

});






























// import React, { Component } from "react";
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   Alert,
//   Linking,
//   Style,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   ImageBackground,
//   NumricInput
// } from "react-native";
// import { Value } from "react-native-reanimated";
// import AsyncStorage from "@react-native-community/async-storage";
// const Payment= props => {
    
   

    
    
    

  

   

    


//   buttonClickListener = () => {
//     this.Hello(this.getTokenBackend)
    
//   }
//   getTokenBackend = (token) => {
//     const { TextInputValue } = this.state;
//     var header = 'Bearer '.concat(token);
//     console.log('Bearer '.concat(token));
//     fetch('http://192.168.101.221:8080/api/transactions/code'.concat('?amount=').concat(TextInputValue).concat('&type-id= 00'), {
//       method: 'GET',
//       headers: {
//         'Authorization': header,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         var url = 'http://192.168.101.221:8080/gateway/payment?code='.concat(responseJson.token)
//         Linking.openURL(url);
//         console.log(responseJson);
//         this.setState({
//           data: responseJson
//         })
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//   }



//   Hello = async (test) => {
//     token = await AsyncStorage.getItem('@MyApp_user');
//     obj = JSON.parse(token);
//     this.getTokenBackend(obj.id_token);
//   }
//   state = {
//     TextInputValue: ''
//   }

//   onPress = () => {
//     this.setState({
//       TextInputValue: '10000'
//     })
//   }
//   onPressButton = () => {
//     this.setState({
//       TextInputValue: '20000'
//     })
//   }
//   onPressButtonTow = () => {
//     this.setState({
//       TextInputValue: '30000'
//     })
//   }
//   onPressButtonThree = () => {
//     this.setState({
//       TextInputValue: '40000'
//     })
//   }
//   onPressButtonFour = () => {
//     this.setState({
//       TextInputValue: '50000'
//     })
//   }
//   onPressButtonFive = () => {
//     this.setState({
//       TextInputValue: '60000'
//     })
    

 
   


    
    



//   }

//   return (
    
//     <View style={styles.mainBody}>



//             <View style={styles.SectionStyle}>
//               <KeyboardAvoidingView enabled>
//                  <ScrollView keyboardShouldPersistTaps="handled">
//                    <View style={styles.Card}>
//                      <TouchableOpacity
//                       onPress={() => props.navigation.navigate('TransactionList')}
//                     >
//                       <Text style={{ color: '#ffffff', fontSize: 18, textAlign: 'right', margin: 5 }}>حساب کاربری</Text>
//                     </TouchableOpacity>
//                     <View style={styles.RowIconAmount}>
    
    
//                       <Image style={styles.NozooratCardIcon}
    
//                         source={require('../Image/PaymentNozoorat/NozooratCardIcon.png')}
//                       >
//                       </Image>
//                       <Text
//                         style={styles.AmountCard}
    
//                         onChangeText={TextInputValue => this.setState({ TextInputValue })}
    
//                       >
//                         {this.state.TextInputValue}
//                       </Text>
//                     </View>
    
//                     <Text style={styles.CardText}>وجوهات شرعی</Text>
    
//                   </View>
    
//                   <Text
    
//                     style={styles.SelectText}>
//                     مبلغ خود را انتخاب کنید (تومان)
//     </Text>
    
//                   <TextInput
    
//                     style={styles.inputStyle}
//                     // Adding hint in TextInput using Placeholder option.
//                     placeholder="مبلغ دلخواه"
//                     //set the value in state.
//                     onChangeText={TextInputValue => this.setState({ TextInputValue })}
//                   // Making the Under line Transparent.
    
    
//                   >
    
    
//                     {this.state.TextInputValue}
//                   </TextInput>
//                   <View
//                     style={styles.AmountOneRow}
//                   >
    
//                     <TouchableOpacity
//                       onPress={this.onPress}
//                       style={styles.AmountButton}
//                       activeOpacity={0.5}>
//                       <Text style={styles.AmountButtonTextStyle}>10,000</Text>
//                       <Text style={styles.AmountButtonTextStyle}>تومان</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={this.onPressButton}
//                       style={styles.AmountButton}
//                       activeOpacity={0.5}>
//                       <Text style={styles.AmountButtonTextStyle}>20,000</Text>
//                       <Text style={styles.AmountButtonTextStyle}>تومان</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={this.onPressButtonTow}
//                       style={styles.AmountButton}
//                       activeOpacity={0.5}>
//                       <Text style={styles.AmountButtonTextStyle}>30,000</Text>
//                       <Text style={styles.AmountButtonTextStyle}>تومان</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <View
//                     style={styles.AmountTwoRow}
//                   >
    
//                     <TouchableOpacity
//                       style={styles.AmountButton}
//                       onPress={this.onPressButtonThree}
//                       activeOpacity={0.5}>
//                       <Text style={styles.AmountButtonTextStyle}>40,000</Text>
//                       <Text style={styles.AmountButtonTextStyle}>تومان</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={this.onPressButtonFour}
//                       style={styles.AmountButton}
//                       activeOpacity={0.5}>
//                       <Text style={styles.AmountButtonTextStyle}>50,000</Text>
//                       <Text style={styles.AmountButtonTextStyle}>تومان</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={this.onPressButtonFive}
//                       style={styles.AmountButton}
//                       activeOpacity={0.5}>
//                       <Text style={styles.AmountButtonTextStyle}>60,000</Text>
//                       <Text style={styles.AmountButtonTextStyle}>تومان</Text>
//                     </TouchableOpacity>
    
//                   </View>
//                   <TouchableOpacity
//                     style={styles.buttonStyle}
//                     activeOpacity={0.5}
//                     onPress={this.buttonClickListener}>
//                     <Text style={styles.buttonTextStyle}>پرداخت</Text>
//                   </TouchableOpacity>
//                 </ScrollView>
//               </KeyboardAvoidingView>
    
//             </View>
    
    
    
    
    
    
//           </View>
//   );
// };
// export default Payment;

// const styles = StyleSheet.create({
//    mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },

//   SectionStyle: {
//     flex: 1,
//     height: 40,
//     marginLeft: 20,
//     marginRight: 20,
//     margin: 6,
//   },
//   Card: {
//     flex: 1,
//     width: '100%',
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     backgroundColor: '#f5cf53',
//     shadowColor: "#535353",
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.58,
//     shadowRadius: 16.00,

//     elevation: 15,

//   },
//   SelectText: {
//     margin: 12,
//     flex: 1,

//     color: '#aaaaaa',
//     fontSize: 15
//   },
//   inputStyle: {
//     margin: 12,
//     backgroundColor: '#fff',
//     borderWidth: 0,
//     borderRadius: 7,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     shadowColor: "#535353",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.39,
//     shadowRadius: 8.30,

//     elevation: 10
//   },
//   AmountOneRow: {
//     flexDirection: 'row',
//   },
//   AmountTwoRow: {
//     flexDirection: 'row',
//   },
//   AmountButton: {
//     margin: 12,
//     textAlign: 'center',
//     alignItems: 'center',
//     flex: 1,
//     width: '100%',
//     height: 110,
//     backgroundColor: '#fff',
//     borderRadius: 7,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     backgroundColor: '#fff',
//     flex: 1,
//     color: '#000',
//     shadowColor: "#535353",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.39,
//     shadowRadius: 8.30,

//     elevation: 10,
//   },
//   AmountButtonTextStyle: {
//     color: '#1e5c2e',
//     fontSize: 20,
//     marginTop: 15
//   },
//   buttonStyle: {
//     margin: 12,
//     backgroundColor: '#26d142',
//     borderWidth: 0,
//     color: '#ffffff',
//     alignItems: 'center',
//     borderRadius: 7,
//     padding: 12,
//     marginTop: 27,
//   },
//   buttonTextStyle: {
//     color: '#ffffff',
//     fontSize: 25,
//   },

//   NozooratCardIcon: {
//     marginRight: 'auto'

//   },

//   CardText: {
//     color: '#fff',
//     fontSize: 30,
//     marginBottom: 10,
//     textAlign: 'center'
//   },
//   BackIcon: {
//     marginRight: 'auto',
//     margin: 3,
//   },
//   RowIconAmount: {
//     flexDirection: 'row',
//     marginRight: 'auto'

//   },
//   AmountCard: {
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     color: '#ffffff',
//     fontSize: 40,
//     marginTop: 0,
//     width: '100%',
//   }



// });

