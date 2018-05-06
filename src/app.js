import React, { Component } from 'react';
import {
   StatusBar
} from 'react-native';
import RootStack from './config/route';
import Splash from './screens/splash';
import { firebase } from './config/firebaseConfig';
import global from './config/global';

StatusBar.setBackgroundColor('transparent');
StatusBar.setTranslucent(true);

console.ignoredYellowBox = [
   'Setting a timer'
];

export default class App extends Component {
   constructor() {
      super();
      this.state = {
         isLogin: null
      };
      global.setAuthState = this.setAuthState.bind(this);
   }

   componentDidMount() { 
      this.checkLogin();
   }

   shouldComponentUpdate(nextProps, nextState) {
      return this.state.isLogin !== nextState.isLogin;
   }
   
   setAuthState(isLogin) {
      setTimeout(() => this.setState({ isLogin }), 500);
   }

   checkLogin() {
      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            global.user = user;
            this.setAuthState(true);
         } else {
            this.setAuthState(false);
         }
      });
   }
   render() {
      const Screen = RootStack(this.state.isLogin);
      if (this.state.isLogin === null) {
         return <Splash />;
      }
      return <Screen />;
   }
}
