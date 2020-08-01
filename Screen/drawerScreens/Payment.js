import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet,Image,ScrollView,Linking} from 'react-native'

export default class payment extends Component {
  state = {
    textValue: ''
  }

  onPress = () => {
    this.setState({
      textValue: '10000'
    })
  }
  onPressButton = () => {
    this.setState({
      textValue: '20000'
    })
  }
  onPressButtonTow = () => {
    this.setState({
      textValue: '30000'
    })
  }
  onPressButtonThree = () => {
    this.setState({
      textValue: '40000'
    })
  }
  onPressButtonFour = () => {
    this.setState({
      textValue: '50000'
    })
  }


  render() {
    return (
      <View style={styles.mainBody}>

<ScrollView keyboardShouldPersistTaps="handled">
<View style={{ alignItems: 'center' }}>
              <Image
                source={require('../Image/logo.png')}
                style={{
                  width: '50%',
                  height: 150,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>

        <TextInput
          style={styles.inputStyle} placeholder="مبلغ دلخواه" placeholderTextColor="#fff">{this.state.textValue}
        </TextInput>

        <Text style={styles.textButtonStyle} onPress={this.onPress} >10000</Text>
        <Text style={styles.textButtonStyle} onPress={this.onPressButton} >20000</Text>
        <Text style={styles.textButtonStyle} onPress={this.onPressButtonTow} >30000</Text>
        <Text style={styles.textButtonStyle} onPress={this.onPressButtonThree} >40000</Text>
        <Text style={styles.textButtonStyle} onPress={this.onPressButtonFour}>50000</Text>
        {/* <Text style={styles.Sumbit} onPress={this.onPressButtonFour}>پرداخت</Text> */}
        </ScrollView>

        <View style={styles.container}>
       <Button title="پرداخت" onPress={ ()=>{ Linking.openURL('http://192.168.101.195:8080/gateway/payment/') } }   />
      
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1e5c2e',
    textAlign: 'right',
  },
  textButtonStyle: {
    display:'flex',
    backgroundColor: '#fff',
    borderWidth: 0,
    color: '#000',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 20,
    textAlign:'center',
    paddingVertical: 10,
  },

  inputStyle: {
    color: '#fff',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 0,
    backgroundColor:'transparent',
    borderColor: '#fff',
    textAlign: 'right'
  },
  Sumbit:{
    display:'flex',
    backgroundColor: '#158199',
    borderWidth: 0,
    borderRadius:10,
    color: '#fff',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 20,
    textAlign:'center',
    paddingVertical: 10,
  }
});



