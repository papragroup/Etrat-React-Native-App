/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators from React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import all the screens needed
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import OTPScreen from './Screen/OTPScreen';
import LoginOtpScreen from './Screen/LoginOtpScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import PaymentType from './Screen/drawerScreens/PaymentType';
import HomeScreen from './Screen/drawerScreens/HomeScreen';
import NozooratPayment from './Screen/drawerScreens/NozooratPayment';
import SadaghatPayment from './Screen/drawerScreens/SadaghatPayment';
import VojoohatPayment from './Screen/drawerScreens/VojoohatPayment';
import TransactionList from './Screen/drawerScreens/TransactionList';
import OtpResetPassword from './Screen/OtpResetPassword';
import ResetPassword from './Screen/ResetPassword';




const Auth = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#1e5c2e',
      },
      headerTintColor: '#fff',
    },
  },
  OTPScreen: {
    screen: OTPScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  PaymentType: {
    screen: PaymentType,
    navigationOptions: {
      headerShown: false,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  NozooratPayment: {
    screen: NozooratPayment,
    navigationOptions: {
      headerShown: false,
    },
  },
  SadaghatPayment: {
    screen: SadaghatPayment,
    navigationOptions: {
      headerShown: false,
    },
  },
  VojoohatPayment: {
    screen: VojoohatPayment,
    navigationOptions: {
      headerShown: false,
    },
  },
  TransactionList: {
    screen: TransactionList,
    navigationOptions: {
      headerShown: false,
    },
  },
  LoginOtpScreen: {
    screen: LoginOtpScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  OtpResetPassword: {
    screen: OtpResetPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
  
  
  
});

/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */
const App = createSwitchNavigator({ 
  SplashScreen: {
    /* SplashScreen which will come once for 5 Seconds */
    screen: SplashScreen,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  },
  Auth: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    /* Navigation Drawer as a landing page */
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      /* Hiding header for Navigation Drawer as we will use our custom header */
      headerShown: false,
    },
  },
});

export default createAppContainer(App);