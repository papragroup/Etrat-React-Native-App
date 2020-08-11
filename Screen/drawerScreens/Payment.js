import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, Linking, Style, Image } from "react-native";
import { Value } from "react-native-reanimated";
import AsyncStorage from "@react-native-community/async-storage";

export default class Payment extends Component {


  constructor(props) {
    super(props)
    this.state = {
      TextInputValue: '',
      name: 'Amount',
      id: "count"
    }
  }



  buttonClickListener = () => {
    this.Hello(this.getTokenBackend)
    // var url='http://192.168.101.221:8080/gateway/payment?amount='.concat(TextInputValue).concat('&token=').concat(token);
    // console.log(url);








  }
  getTokenBackend = (token) => {
    var header = 'Bearer '.concat(token);
    console.log('Bearer '.concat(token));
    fetch('http://192.168.101.221:8080/api/transactions/code'.concat('?amount=').concat('1000').concat('&type-id=00'), {
      method: 'GET',
      headers: {
        'Authorization': header,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        var url = 'http://192.168.101.221:8080/gateway/payment?code='.concat(responseJson.token).
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


  render() {
    return (
      <View style={styles.container}


        name="form" id='samanpeyment' action='https://sep.shaparak.ir/payment.aspx' method='post'

      >
        <Image
          source={require('../Image/logonotitle.png')}
          style={{
            width: '50%',
            height: 150,
            resizeMode: 'contain',
            margin: 30,
          }}
        />

        <TextInput

          style={{ height: 45, width: "95%", borderColor: "gray", borderWidth: 2 }}
          placeholder="مبلغ دلخواه"
          onChangeText={TextInputValue => this.setState({ TextInputValue })}
          underlineColorAndroid="transparent"
        >
          {this.state.TextInputValue}
        </TextInput>
        <Text style={styles.textButtonStyle} onPress={this.onPress} >10000</Text>
        <Text style={styles.textButtonStyle} onPress={this.onPressButton} >20000</Text>
        <Text style={styles.textButtonStyle} onPress={this.onPressButtonTow} >30000</Text>
        <Text style={styles.textButtonStyle} onPress={this.onPressButtonThree} >40000</Text>
        <Text style={styles.textButtonStyle} onPress={this.onPressButtonFour}>50000</Text>

        <View style={[{ width: "93%", margin: 15, backgroundColor: "red" }]}>
          <Button
            onPress={this.buttonClickListener}
            title="Send"
            color="#00B0FF"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",

  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
});