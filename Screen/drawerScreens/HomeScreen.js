
import React, { Component } from "react";
import moment from 'jalali-moment'
import baseUrl from "../../app.json"
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";


// import { PersianNumber } from 'react-persian';

export default class HomeScreen extends Component {



  constructor(props) {

    super(props)
    this.state = {
      data: [],
      user: '',
      isFetching: false,
    }
    this.initUser()

    this.GetToken();
  }

  onRefresh() {
    this.setState({isFetching: true,},() => {this.GetToken();});
}

  transactionList = (token) => {
    var header = 'Bearer '.concat(token);
    fetch(baseUrl.baseUrl.concat('/api/transactions/user').concat('?page=0').concat('&size=20'), {
      method: 'GET',
      headers: {
        'Authorization': header,
        'Content-Type': 'application/json',
      },
    })

      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson });
        
      })
      .catch((error) => {
        console.error(error);
      });

  }

  GetToken = async (test) => {
    token = await AsyncStorage.getItem('@MyApp_user');
    obj = JSON.parse(token);
    await this.transactionList(obj.id_token);
    this.setState({ isFetching: false })
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

  ListEmptyView = () => {
    return (
      <Text style={styles.EmptyTransaction}> لیست تراکنش های شما خالی است</Text>

    );
  }


  render() {
    let dateJalali = moment().format('jYYYY/jM/jD')

    return (
      <View style={styles.mainBody}>



        <View style={styles.SectionStyle}
        
       

        >
          

          <ScrollView keyboardShouldPersistTaps="handled">


            <View style={styles.Card}>
              <View style={styles.HeaderCard}>

                <Text

                  style={{ fontFamily: "IRANSansFaNumBold", color: '#cccccc', fontSize: 14, textAlign: 'right', marginTop: 4, marginLeft: 7 }}>
                  <Text>تاریخ :  </Text>
                  {dateJalali}

                </Text>

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
              <Text style={{ fontFamily: "IRANSans", textAlign: 'center', fontSize: 18, color: '#cccccc', marginTop: 5 }}>مجموع پرداخت ها</Text>
              <View style={styles.TotalPayment}>

                <Text style={styles.AmountTotalPayment}>1,000,000
                <Text style={{ fontFamily: "IRANSans", textAlign: 'center', fontSize: 13, color: '#ffffff', marginRight: 6 }} >ریال</Text>
                </Text>

              </View>
              <View style={styles.LastTransaction}>

                <Text style={{ fontFamily: "IRANSans_Bold", margin: 10, color: '#1e5c2e', fontSize: 15, textAlign: 'center' }}>تراکنش های آخر</Text>
                <FlatList
                  data={this.state.data}
                  onRefresh={() => this.onRefresh()}
                  refreshing={this.state.isFetching}
                  ListEmptyComponent={this.ListEmptyView}
                  renderItem={({ item }) =>
                    <View style={styles.Transaction}>

                      {/* <View style={styles.TransactionsAmountDateStyle}> */}
                        <Text style={styles.TransactionsAmountStyle}> {item.amount} </Text>
                        {/* <Text style={styles.TransactionsDateStyle}>12/21/2019</Text> */}
                      {/* </View> */}
                      <Text style={styles.TransactionsBorderStyle}></Text>
                      <Text style={styles.TransactionsTextStyle}>{item.type.description}</Text>

                    </View>
                  }

                />


              </View>


            </View>
            <View style={styles.RowStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentType')} >

                <Text style={{ fontFamily: "IRANSans", color: '#1e5c2e', marginTop: 6, fontSize: 18, }}>همه موارد</Text>
              </TouchableOpacity>

              <Text style={{ fontFamily: "IRANSans_Bold", color: '#1e5c2e', fontSize: 25 }}>پرداخت</Text>

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
    padding: 15,
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
    textAlign: 'center',
    fontSize: 22,
    width: '100%',
    fontFamily: "IRANSans"

  },
  ButtonIconStyle: {
    marginRight: 'auto',
    width: 42,
    height: 42,
  },
  SelectText: {
    marginRight: 12,
    color: '#aaaaaa',
    fontSize: 13,
    fontFamily: "IRANSans_Bold"
  },
  HeaderCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  TotalPayment: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row'
  },
  AmountTotalPayment: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 25,
    width: '100%',
    fontFamily: "IRANSansFaNum"
  },
  RialTotalPayment: {
    marginRight: 'auto',
    color: '#ffffff',
  },
  Profile: {
    flexDirection: 'row',
    marginLeft: 'auto',
    margin: 6
  },
  LastTransaction: {
    borderRadius: 12,
    margin: 30,
    backgroundColor: '#fff',
  },
  Transaction: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  TransactionsTextStyle: {
    flex: 1,
    marginRight: 10,
    fontSize: 17,
    color: "#1e5c2e",
    fontFamily: "IRANSans",
    
  },
  TransactionsAmountStyle: {
    flex: 1,
    marginLeft: 12,
    color: '#1e5c2e',
    fontSize: 18,
    fontFamily: "IRANSansFaNum"
  },
  TransactionsBorderStyle: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2,
    marginBottom: 20,
    width: '50%'
  },
  EmptyTransaction: {
    textAlign: 'center',
    fontSize: 14,
    color: '#aaaaaa',
    margin: 20,
    fontFamily: "IRANSans_Bold"
  },
  TransactionsDateStyle: {
    flex:1,
    fontFamily: 'IRANSansFaNum',
    fontSize: 11,
    color: '#666666',
    marginLeft: 12
  },
  TransactionsAmountDateStyle:{
    flex:1,
  }
});

