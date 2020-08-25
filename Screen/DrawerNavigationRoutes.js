/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
import SadaghatPayment from './drawerScreens/SadaghatPayment';
import PaymentType from './drawerScreens/PaymentType';
import TransactionList from './drawerScreens/TransactionList';
import NozooratPayment from './drawerScreens/NozooratPayment';
import VojoohatPayment from './drawerScreens/VojoohatPayment';
import SettingsScreen from './drawerScreens/SettingsScreen';
import CustomSidebarMenu from './Component/CustomSidebarMenu';
import NavigationDrawerHeader from './Component/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'صفحه نخست',
      headerRight: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1e5c2e',
      },
      headerTintColor: '#fff',
    }),
  },
});

// const SecondActivity_StackNavigator = createStackNavigator({
//   First: {
//     screen: PaymentType,
//     // navigationOptions: ({ navigation }) => ({
//     //   title: 'انتخاب نوع پرداخت',
//     //   headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
//     //   headerStyle: {
//     //     backgroundColor: '#1e5c2e',
//     //   },
//     //   headerTintColor: '#fff',
//     // }),
//   },
// });
const SecoundActivity_StackNavigator = createStackNavigator({
  First: {
    screen:SadaghatPayment,
    navigationOptions: ({ navigation }) => ({
      title: ' پرداخت صدقات',
      headerRight: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1e5c2e',
      },
      headerTintColor: '#fff',
    }),
  },
}); 
const TripleActivity_StackNavigator = createStackNavigator({
  First: {
    screen: PaymentType,
    navigationOptions: ({ navigation }) => ({
      title: 'انتخاب نوع پرداخت',
      headerRight: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1e5c2e',
      },
      headerTintColor: '#fff',
    }),
  },
});
const FourActivity_StackNavigator = createStackNavigator({
  First: {
    screen: TransactionList,
    navigationOptions: ({ navigation }) => ({
      title: ' لیست تراکنش ها',
      headerRight: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1e5c2e',
      },
      headerTintColor: '#fff',
    }),
  },
});
const FiveActivity_StackNavigator = createStackNavigator({
  First: {
    screen: NozooratPayment,
    navigationOptions: ({ navigation }) => ({
      title: ' پرداخت نذورات ',
      headerRight: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1e5c2e',
      },
      headerTintColor: '#fff',
    }),
  },
});
const SixActivity_StackNavigator = createStackNavigator({
  First: {
    screen: VojoohatPayment,
    navigationOptions: ({ navigation }) => ({
      title: ' پرداخت وجوهات شرعی ',
      headerRight: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1e5c2e',
      },
      headerTintColor: '#fff',
    }),
  },
});


const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
        headerShown: false,
      },
    },
    SadaghatPayment: {
      screen: SecoundActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'SadaghatPayment',
      },
    },
    PaymentType: {
      screen: TripleActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'PaymentType',
      },
    },
    TransactionList: {
      screen: FourActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'TransactionList',
      },
    },
    NozooratPayment: {
      screen: FiveActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'NozooratPayment',
      },
    },
    VojoohatPayment: {
      screen: SixActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'VojoohatPayment',
      },
    },
  
    
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default DrawerNavigatorRoutes;