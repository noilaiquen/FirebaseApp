import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   Alert,
   Keyboard
} from 'react-native';
import { Image } from 'react-native-animatable';
import FormLogin from '../components/formLogin';
import FormRegister from '../components/formRegister';
import logo from '../../assets/img/logo.png';
import { firebase } from '../config/firebaseConfig'; 
import global from '../config/global'; 

export default class Auth extends Component {
   constructor(props) {
      super(props);
      this.state = {
         visibleForm: 'LOGIN',
         isLoading: false,
         email: '',
         password: '',
         rePassword: ''
      };

      this.onSetState = this.onSetState.bind(this);
      this.onLogin = this.onLogin.bind(this);
      this.onRegister = this.onRegister.bind(this);
      this.setVisibleForm = this.setVisibleForm.bind(this);
   }

   onLogin() {
      Keyboard.dismiss();
      this.setState({ isLoading: true });

      const { email, password } = this.state;
      if (email === '' && password === '') {
         this.setState({ isLoading: false });
         Alert.alert('', 'Password or email is empty!');
         return;
      }

      firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
         let message;
         if (error.code === 'auth/invalid-email') {
            message = error.message;
         }
         if (error.code === 'auth/user-not-found') {
            message = 'User not exist.';
         }
         if (error.code === 'auth/wrong-password') {
            message = 'The password invalid.';
         }
         
         this.setState({ isLoading: false });
         Alert.alert('Login failed!', message);
      });
   }

   onRegister() {
      this.setState({ isLoading: true });
      Keyboard.dismiss();

      const { email, password, rePassword } = this.state;
      if (email === '' || password === '' || rePassword === '') {
         this.setState({ isLoading: false });
         Alert.alert('', 'Password or email is empty!');
         return;
      }

      if (rePassword !== password) {
         this.setState({ isLoading: false });
         Alert.alert('', 'Two passwords not match!');
         return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
         this.setState({ isLoading: false });
         Alert.alert('', error.message);
      });
   }
   
   onSetState(key, value) {
      const newState = this.state;
      newState[key] = value;
      this.setState(newState);
   }

   setVisibleForm(form) {
      this.setState({
         visibleForm: form,
         isLoading: false,
         email: '',
         password: '',
         rePassword: ''
      });
   }

   render() {
      const { container, logoContainer, logoImage } = styles;
      return (
         <View style={container}>
            <View style={logoContainer}>
               <Image
                  animation={'bounceIn'}
                  duration={1200}
                  delay={200}
                  source={logo}
                  style={logoImage}
               />
            </View>
            {this.state.visibleForm === 'LOGIN' && (
               <FormLogin
                  setVisibleForm={() => this.setVisibleForm('REGISTER')}
                  onSetState={this.onSetState}
                  onLogin={this.onLogin}
                  isLoading={this.state.isLoading}
               />
            )} 
            {this.state.visibleForm === 'REGISTER' && (
               <FormRegister
                  setVisibleForm={() => this.setVisibleForm('LOGIN')}
                  onSetState={this.onSetState}
                  onRegister={this.onRegister}
                  isLoading={this.state.isLoading}
               />
            )} 
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#3498db',
      /* justifyContent: 'center',
      alignItems: 'center' */
   },
   logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   logoImage: {
      width: 300,
      resizeMode: 'contain'
   }
});
