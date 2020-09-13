import React, { Component } from "react";
import baseUrl from "../../app.json"
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
  NumricInput,
} from "react-native";

import { Value } from "react-native-reanimated";
import AsyncStorage from "@react-native-community/async-storage";
export default class VojoohatPayment extends Component {


  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      data: '',
      user: ''
    }
    this.initUser()
  }

  setUserData(userdata) {
    this.setState({ user: userdata })
  }
  fetchdata(token) {
    var header = 'Bearer '.concat(token);
    fetch(baseUrl.baseUrl.concat('/api/user'), {
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

    const { TextInputValue } = this.state;
    if (TextInputValue) {
      this.GetToken(this.getTokenBackend)
    } else {
      alert('لطفا مبلغ را وارد کنید')
    }



  }
  getTokenBackend = (token) => {
    const { TextInputValue } = this.state;
    var header = 'Bearer '.concat(token);
    fetch(baseUrl.baseUrl.concat('/api/transactions/code').concat('?amount=').concat(TextInputValue).concat('&type-id=14'), {
      method: 'GET',
      headers: {
        'Authorization': header,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var url = baseUrl.baseUrl.concat('/gateway/payment?code=').concat(responseJson.token)
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



  GetToken = async (test) => {
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
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  render() {
    return (

      <View style={styles.mainBody}>



        <View style={styles.SectionStyle}>

          <KeyboardAvoidingView enabled>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.Card}>

                <View style={styles.ProfileBackRow}>
                  <TouchableOpacity onPress={this.handleBackButtonClick}>
                    <Image
                      source={require('../Image/BackIconWhite.png')}
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain',
                        marginRight: 'auto',
                        marginTop: 7,
                      }}
                    />

                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.Profile}
                    onPress={() => this.props.navigation.navigate('TransactionList')}
                  >
                    <Text style={{ fontFamily: "IRANSans", color: '#ffffff', fontSize: 15, marginTop: 4 }}>{this.state.user.firstName} {this.state.user.lastName}</Text>
                    <Image
                      source={require('../Image/TransactionList/ProfilePicturesWhiteBack.png')}
                      style={{
                        height: 30,
                        resizeMode: 'contain',

                      }}
                    />

                  </TouchableOpacity>






                </View>






                <View style={styles.RowIconAmount}>


                  <Image style={styles.NozooratCardIcon}

                    source={require('../Image/PaymentNozoorat/VojoohatCardIcon.png')}
                  >
                  </Image>
                  <Text
                    style={styles.AmountCard}

                    onChangeText={TextInputValue => this.setState({ TextInputValue } + 'تومان')}

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
                  <Text style={styles.AmountButtonNumStyle}>10,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPressButton}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonNumStyle}>20,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPressButtonTow}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonNumStyle}>30,000</Text>
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
                  <Text style={styles.AmountButtonNumStyle}>40,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPressButtonFour}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonNumStyle}>50,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPressButtonFive}
                  style={styles.AmountButton}
                  activeOpacity={0.5}>
                  <Text style={styles.AmountButtonNumStyle}>60,000</Text>
                  <Text style={styles.AmountButtonTextStyle}>تومان</Text>
                </TouchableOpacity>

              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={this.buttonClickListener}
              // disabled={!this.state.TextInputValue}

              >
                <Text

                  style={styles.buttonTextStyle}>پرداخت</Text>
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
    marginRight: 12,
    marginTop: 12,
    flex: 1,
    color: '#aaaaaa',
    fontSize: 13,
    fontFamily: "IRANSans_Bold"
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
    elevation: 10,
    fontFamily: "IRANSansFaNum",
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
    fontSize: 13,
    fontFamily: "IRANSans",
    textAlignVertical: 'center',
    textAlign: 'center',
    width: '100%',



  },
  AmountButtonNumStyle: {
    fontFamily: "IRANSansFaNumBold",
    textAlign: 'center',
    color: '#1e5c2e',
    fontSize: 23,
    marginTop: 18,
    width: 200,
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
    fontSize: 22,
    fontFamily: "IRANSans"
  },

  NozooratCardIcon: {
    marginRight: 'auto'

  },

  CardText: {
    flexDirection: 'row',
    marginRight: 'auto',
    marginLeft: 'auto',

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
    fontFamily: "IRANSansFaNum",
  },
  NozooratCardText: {
    color: '#ffffff',
    fontSize: 13,
    marginTop: 15,
    marginRight: 13,
    fontFamily: "IRANSans"

  },
  vojoohatCardText: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: "IRANSans"
  },
  SadaghatCardText: {
    color: '#ffffff',
    fontSize: 13,
    marginTop: 15,
    marginRight: 13,
    fontFamily: "IRANSans"
  },
  Profile: {
    flexDirection: 'row',
    marginLeft: 'auto',
    margin: 6
  },
  ProfileBackRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});






















