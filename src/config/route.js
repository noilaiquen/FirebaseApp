import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Auth from '../screens/auth';
import Profile from '../screens/profile';
import AddNote from '../screens/addNote';
import NewTodos from '../screens/newTodos';
import InProcess from '../screens/InProcess';
import Finish from '../screens/Finish';
import UpdateProfile from '../screens/updateProfile';

const RootStack = isLogin => (
   StackNavigator({
      Authenticate: {
         screen: Auth
      },
      Main: {
         screen: HomeStack
      }
   }, {
      initialRouteName: isLogin ? 'Main' : 'Authenticate',
      navigationOptions: {
         header: null
      }
   })
);

export default RootStack;

const HomeTab = TabNavigator({
   NewTodos: {
      screen: NewTodos,
      navigationOptions: {
         title: 'New'
      }
   },
   InProcess: {
      screen: InProcess,
      navigationOptions: {
         title: 'In Process'
      }
   },
   Finish: {
      screen: Finish,
      navigationOptions: {
         title: 'Finish'
      }
   }
});


const HomeStack = StackNavigator({
   Home: {
      screen: HomeTab,
      navigationOptions: ({ navigation }) => ({
         title: 'Home',
         headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
               <Icon
                  name="ios-contact"
                  color="#3498db"
                  size={30}
                  style={{ marginLeft: 15 }}
               />
            </TouchableOpacity>
         ),
         headerRight: (
            <TouchableOpacity onPress={() => navigation.state.params.addNote()}>
               <Icon
                  name="ios-add-circle-outline"
                  color="#3498db"
                  size={30}
                  style={{ marginRight: 15 }}
               />
            </TouchableOpacity>
         )
      })
   },
   Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
         headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <Icon
                  name="ios-arrow-round-back"
                  color="#3498db"
                  size={45}
                  style={{ marginLeft: 15 }}
               />
            </TouchableOpacity>
         ),
         headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}>
               <Icon
                  name="ios-create-outline"
                  color="#3498db"
                  size={30}
                  style={{ marginRight: 15 }}
               />
            </TouchableOpacity>
         )
      })
   },
   UpdateProfile: {
      screen: UpdateProfile,
      navigationOptions: {
         header: null
      }
   },
   AddNote: {
      screen: AddNote,
      navigationOptions: ({ navigation }) => ({
         title: 'Add note',
         headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <Icon
                  name="ios-arrow-round-back"
                  color="#3498db"
                  size={45}
                  style={{ marginLeft: 15 }}
               />
            </TouchableOpacity>
         )
      })
   }
}, {
   initialRouteName: 'Home',
   navigationOptions: {
      headerTitleStyle: {
         color: '#3498db',
         fontSize: 18,
         fontWeight: '200'
      },
      headerStyle: {
         paddingTop: 17,
         elevation: 0,
         height: 60
      }
   }   
});
