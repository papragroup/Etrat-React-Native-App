

//Import React and Hook we needed
// import React, { useState } from 'react';
import React, { Component, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';

//Import all required component
import {
    FlatList,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,

} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export default class TransactionList extends Component {

    


    state = {
        data: '',
    }

    


    constructor(props) {

        super(props)
        this.state = {
            data: '',
            user: ''
        }
        this.initUser()

        this.Hello();
    }




    transactionList = (token) => {
        var header = 'Bearer '.concat(token);
        fetch('http://192.168.101.221:8080/api/transactions/user'.concat('?page=0').concat('&size=20'), {
            method: 'GET',
            headers: {
                'Authorization': header,
                'Content-Type': 'application/json',
            },
        })

            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson });
                console.log(this.state.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }



    Hello = async (test) => {
        token = await AsyncStorage.getItem('@MyApp_user');
        obj = JSON.parse(token);
        await this.transactionList(obj.id_token);
    }




    setUserData(userdata) {
        this.setState({ user: userdata })
    }
    fetchdata(token) {
        var header = 'Bearer '.concat(token);
        fetch('http://192.168.101.221:8080/api/user', {
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
    
    ListEmptyView = () => {
        return (
               
            <Text style={styles.EmptyTransaction}> لیست تراکنش های شما خالی است</Text>

        );
      }



    render() {
        return (
            <View style={styles.mainBody}>

                <View style={styles.SectionStyle}>
                    <KeyboardAvoidingView enabled>




                        <Image
                            source={require('../Image/TransactionList/ProfilePictures.png')}
                            style={{
                                width:'100%',
                                resizeMode: 'contain',
                            }}
                        />
                        <Text
                            style={{fontFamily:"IRANSans", textAlign: 'center', fontSize: 20, color: '#1e5c2e',marginBottom:12}}> {this.state.user.firstName} {this.state.user.lastName}</Text>
                        <View style={styles.TwoButton}>
                            <TouchableOpacity style={styles.ExitButton}>
                            <Text style={{fontFamily:"IRANSans", color: '#1e5c2e', fontSize: 13,marginRight:'auto',marginLeft:'auto'}}>خروج از حساب کاربری</Text>
                                <Image
                                source={require('../Image/TransactionList/ExitIcon.png')}
                                style={{
                                    marginTop:7,
                                    marginRight:15,
                                resizeMode: 'contain',
                                }}
                            />
                                
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CallButton}>
                            <Text style={{fontFamily:"IRANSans", color: '#ffffff', fontSize: 13,marginRight:'auto',marginLeft:'auto' }}>تماس با پشتیبانی</Text>
                                <Image
                                source={require('../Image/TransactionList/Callicon.png')}
                                style={{
                                marginTop:7,
                                marginRight:15,
                            resizeMode: 'contain',
                                }}
                            />
                            
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontFamily:"IRANSans_Bold", color: '#1e5c2e', fontSize: 20,margin: 12 }}>تراکنش های من</Text>
                   
                        <FlatList
                      
                            data={this.state.data}


                            keyExtractor={item => this.state.data.toString()}
                            ListEmptyComponent={this.ListEmptyView}

                            renderItem={({ item }) =>


                                <View style={styles.Transactions}
                               
                                >
                                    <Text style={styles.RialTransactionStyle}>ریال</Text>
                                    <Text style={styles.TransactionsAmountStyle}>{item.amount}</Text>
                                    <Text style={styles.TransactionsTextStyle}>{item.type.description}</Text>
                                    <Image style={styles.TransactionsIconStyle}
                                        source={require('../Image/PaymenType/SadaghatIcon.png')}

                                    />
                                </View>
                                

                            }
                        />




                    </KeyboardAvoidingView>

                </View>
            </View>
        );

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
        marginTop: 8,
        marginLeft: 20,
        marginRight: 20,
    },
    TwoButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 15
    },
    ExitButton: {
        flex: 1,
        flexDirection:'row',
        marginHorizontal: 5,
        padding: 8,
        backgroundColor: '#fff',
        borderWidth: 0,
        borderRadius: 7,
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
    CallButton: {
        flex: 1,
        flexDirection:'row',
        marginHorizontal: 5,
        padding: 8,
        backgroundColor: '#1e5c2e',
        borderRadius: 7,
    },
    Transactions: {
        margin: 12,
        flexDirection: 'row',
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        margin: 12
    },
    TransactionsTextStyle: {
        flex: 1,
        marginRight: 10,
        fontSize: 20,
        color: "#888",
        fontWeight: 'bold'
    },
    TransactionsIconStyle: {
        width: 25,
        height: 25,
    },
    TransactionsAmountStyle: {
        marginRight: 'auto',
        color: '#1e5c2e',
        fontSize: 18,
        fontFamily:"IRANSansFaNum"
    },
    RialTransactionStyle: {
        color: '#1e5c2e',
        marginRight: 5,
        marginTop: 5,
        fontFamily:"IRANSans"
    },
    EmptyTransaction:{
        textAlign:'center',
        fontSize:14,
        color:'#aaaaaa',
        margin:20,
        fontFamily:"IRANSans_Bold"
        
    }
});