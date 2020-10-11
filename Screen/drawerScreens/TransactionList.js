

//Import React and Hook we needed
// import React, { useState } from 'react';
import React, { Component, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import baseUrl from "../../app.json";



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
    Button,
    Alert

} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export default class TransactionList extends Component {

    _twoOptionAlertHandler = () => {
        //function to make two option alert
        Alert.alert(
            //title
            'خروج',
            //body
            'آیا میخواهید خارج شوید؟',
            [

                { text: 'خیر', onPress: () => console.log('No Pressed'), style: 'cancel' },
                {
                    text: 'بله',
                    onPress: () => {
                        AsyncStorage.clear();
                        this.props.navigation.navigate('LoginScreen');
                        console.log('logout');
                    },
                },
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        );
    }



    constructor(props) {

        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            data: [],
            user: ''
        }
        this.initUser()

        this.GetToken();
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
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }



    render() {

        return (
            <View style={styles.mainBody}>

                <View style={styles.SectionStyle}>
                    <KeyboardAvoidingView enabled>


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



                        <Image
                            source={require('../Image/TransactionList/ProfilePictures.png')}
                            style={{
                                width: '100%',
                                resizeMode: 'contain',
                            }}
                        />
                        <Text
                            style={{ fontFamily: "IRANSans", textAlign: 'center', fontSize: 20, color: '#1e5c2e', marginBottom: 12 }}> {this.state.user.firstName} {this.state.user.lastName}</Text>
                        <View style={styles.TwoButton}>
                            <TouchableOpacity style={styles.ExitButton} onPress={this._twoOptionAlertHandler}>
                                <Text style={{ fontFamily: "IRANSans", color: '#1e5c2e', fontSize: 13, marginRight: 'auto', marginLeft: 'auto' }}>خروج از حساب کاربری</Text>
                                <Image
                                    source={require('../Image/TransactionList/ExitIcon.png')}
                                    style={{
                                        marginTop: 7,
                                        marginRight: 15,
                                        resizeMode: 'contain',
                                    }}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CallButton}>
                                <Text style={{ fontFamily: "IRANSans", color: '#ffffff', fontSize: 13, marginRight: 'auto', marginLeft: 'auto' }}>تماس با پشتیبانی</Text>
                                <Image
                                    source={require('../Image/TransactionList/Callicon.png')}
                                    style={{
                                        marginTop: 7,
                                        marginRight: 15,
                                        resizeMode: 'contain',
                                    }}
                                />

                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontFamily: "IRANSans_Bold", color: '#1e5c2e', fontSize: 20, marginRight: 12, marginTop: 30, marginBottom: 30 }}>تراکنش های من</Text>

                        <FlatList

                            data={this.state.data}


                            keyExtractor={item => this.state.data.toString()}
                            ListEmptyComponent={this.ListEmptyView}

                            renderItem={({ item }) =>

                                <View style={styles.Transactions}

                                >
                                    <View style={styles.TransactionsDateAmountStyle}>
                                        <Text style={styles.TransactionsAmountStyle}> {item.amount}
                                            <Text style={{ fontSize: 12 }}>ریال</Text>
                                        </Text>
                                        <Text style={styles.TransactionsDateStyle}>{item.createDateFormat}</Text>

                                    </View>

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
        flexDirection: 'row',
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
        flexDirection: 'row',
        marginHorizontal: 5,
        padding: 8,
        backgroundColor: '#1e5c2e',
        borderRadius: 7,
    },
    Transactions: {
        margin: 12,
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        margin: 12
    },
    TransactionsTextStyle: {
        flex: 1,
        marginRight: 10,
        marginTop:5,
        fontSize: 20,
        color: "#888",
        fontWeight: 'bold'
    },
    TransactionsIconStyle: {
        width: 25,
        height: 25,
        marginTop:5,
    },
    TransactionsAmountStyle: {
        marginRight: 'auto',
        color: '#1e5c2e',
        fontSize: 20,
        fontFamily: "IRANSansFaNum"
    },
    RialTransactionStyle: {
        color: '#1e5c2e',
        marginRight: 5,
        marginTop: 5,
        fontFamily: "IRANSans"
    },
    EmptyTransaction: {
        textAlign: 'center',
        fontSize: 14,
        color: '#aaaaaa',
        margin: 20,
        fontFamily: "IRANSans_Bold"

    },
    TransactionsDateStyle: {
        fontFamily: 'IRANSANS',
        fontSize: 15,
        color: '#666666'
    }
});