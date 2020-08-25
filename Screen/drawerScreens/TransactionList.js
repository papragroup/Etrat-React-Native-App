



/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

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
        const handleClick = (index, screenToNavigate) => {
            if (screenToNavigate == 'logout') {
                props.navigation.toggleDrawer();
                Alert.alert(
                    'خروج',
                    'مطمئنید؟ می خواهید خارج شوید؟',
                    [
                        {
                            text: 'خیر',
                            onPress: () => {
                                return null;
                            },
                        },
                        {
                            text: 'بله',
                            onPress: () => {
                                AsyncStorage.clear();
                                props.navigation.navigate('Auth');
                                console.log('logout');
                            },
                        },
                    ],
                    { cancelable: false }
                );
            } else {
                props.navigation.toggleDrawer();
                global.currentScreenIndex = screenToNavigate;
                props.navigation.navigate(screenToNavigate);
            }
        };


    }
    
    



    render() {
        return (
            <View style={styles.mainBody}>

                <View style={styles.SectionStyle}>
                    <KeyboardAvoidingView enabled>




                        <Image
                            source={require('../Image/TransactionList/ProfilePictures.png')}
                            style={{
                                width: '100%',
                                height: 53,
                                resizeMode: 'contain',
                                margin: 12
                            }}
                        />
                        <Text
                            style={{ textAlign: 'center', fontSize: 20, color: '#1e5c2e', margin: 12 }}> {this.state.user.firstName} {this.state.user.lastName}</Text>
                        <View style={styles.TwoButton}>
                            <TouchableOpacity style={styles.ExitButton}>
                                {/* <Image
                                source={require('../Image/TransactionList/ExitIcon.png')}
                                style={{
                                    width: '100%',
                                    height: 10,
                                    resizeMode: 'contain',
                                    margin: 12
                                }}
                            /> */}
                                <Text style={{ color: '#1e5c2e', fontSize: 15, textAlign: 'center' }}>خروج از حساب کاربری</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CallButton}>
                                <Text style={{ color: '#ffffff', fontSize: 15, textAlign: 'center' }}>تماس با پشتیبانی</Text>
                                {/* <Image
                                source={require('../Image/TransactionList/Callicon.png')}
                                style={{
                                    width: '100%',
                                    height: 10,
                                    resizeMode: 'contain',
                                    margin: 12
                                }}
                            /> */}
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontFamily: 'Yekan', color: '#1e5c2e', fontSize: 20, fontWeight: 'bold', margin: 12 }}>تراکنش های من</Text>
                   
                        <FlatList
                      
                            data={this.state.data}


                            keyExtractor={item => this.state.data.toString()}

                            renderItem={({ item }) =>


                                <TouchableOpacity style={styles.Transactions}
                                >
                                    <Text style={styles.RialTransactionStyle}>ریال</Text>
                                    <Text style={styles.TransactionsAmountStyle}>{item.amount}</Text>
                                    <Text style={styles.TransactionsTextStyle}>{item.type.description}</Text>
                                    <Image style={styles.TransactionsIconStyle}
                                        source={require('../Image/PaymenType/SadaghatIcon.png')}

                                    />
                                </TouchableOpacity>

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
        marginTop: 15,
        marginBottom: 15
    },
    ExitButton: {
        marginHorizontal: 5,
        flex: 1,
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
        marginHorizontal: 5,
        flex: 1,
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
    },
    RialTransactionStyle: {
        color: '#1e5c2e',
        marginRight: 5,
        marginTop: 5
    }
});