
import React, { Component } from "react";
import baseUrl from "../../app.json"

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default class PaymentType extends Component {

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }


  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }


  render() {
    return (
      <View style={styles.mainBody}>


        <View style={styles.SectionStyle}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <TouchableOpacity onPress={this.handleBackButtonClick}>
              <Image
                source={require('../Image/BackIconBlack.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />

            </TouchableOpacity>
            <Text style={styles.HeaderText}>پرداخت</Text>
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
  };

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
  HeaderText: {
    margin: 12,
    textAlign: 'center',
    color: '#1e5c2e',
    fontSize: 32,
    fontFamily: "IRANSans_Bold"


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
    width: 45,
    height: 45,


  },
  SelectText: {
    margin: 12,
    marginTop: 27,
    color: '#aaaaaa',
    fontSize: 13,
    fontFamily: "IRANSans_Bold"
  },
});


