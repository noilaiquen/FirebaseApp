import React from 'react';
import {
   Text,
   StyleSheet,
   Dimensions,
   TextInput,
   TouchableOpacity
} from 'react-native';
import { View } from 'react-native-animatable';
import CustomButton from '../components/customButton';

const { width } = Dimensions.get('window');

const FormRegister = props => {
   const {
      container, textInput, btnLogin,
      textLogin, btnOutline, textOutline
   } = styles;

   return (
      <View style={container}>
         <View animation={'zoomIn'} duration={500} delay={100}>
            <TextInput
               ref={(input) => this.emailInput = input}  //eslint-disable-line   
               placeholder="Email"
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="next"
               keyboardType="email-address"
               autoCapitalize="none"
               underlineColorAndroid="rgba(0,0,0,0)"
               onSubmitEditing={() => this.passwordInput.focus()}
               onChangeText={text => props.onSetState('email', text)}
               style={textInput}
            />
         </View>
         <View animation={'zoomIn'} duration={500} delay={200}>
            <TextInput
               ref={(input) => this.passwordInput = input}  //eslint-disable-line
               placeholder="Password"
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="go"
               secureTextEntry
               underlineColorAndroid="rgba(0,0,0,0)"
               onSubmitEditing={() => this.rePasswordInput.focus()}
               onChangeText={text => props.onSetState('password', text)}
               style={textInput}
            />
         </View>
         <View animation={'zoomIn'} duration={500} delay={300}>
            <TextInput
               ref={(input) => this.rePasswordInput = input}  //eslint-disable-line
               placeholder="RePassword"
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="go"
               secureTextEntry
               underlineColorAndroid="rgba(0,0,0,0)"
               onChangeText={text => props.onSetState('rePassword', text)}
               onSubmitEditing={() => props.onRegister()}
               style={textInput}
            />
         </View>
         <View animation={'zoomIn'} duration={500} delay={400}>
            <CustomButton
               text="REGISTER"
               isLoading={props.isLoading}
               style={btnLogin}
               styleText={textLogin}
               action={() => props.onRegister()}
            />
         </View>
         <View animation={'zoomIn'} duration={500} delay={500}>
            <TouchableOpacity
               style={btnOutline}
               onPress={() => props.setVisibleForm()}
            >
               <Text style={textOutline}>Have a account? Login.</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};
export default FormRegister;

const styles = StyleSheet.create({
   container: {
      alignItems: 'center'
   },
   textInput: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 10,
      width: width * 0.9,
      color: 'rgba(255,255,255,0.9)',
      paddingHorizontal: 10,
      fontSize: 16
   },
   btnLogin: {
      height: 40,
      backgroundColor: '#2980b9',
      marginBottom: 10,
      width: width * 0.9,
      alignItems: 'center',
      justifyContent: 'center'
   },
   textLogin: {
      fontSize: 16,
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 'bold'
   },
   btnOutline: {
      marginBottom: 10,
   },
   textOutline: {
      color: 'rgba(255,255,255,0.9)'
   }
});
