import React, { Component } from 'react';
import {
   View,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   StatusBar
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import global from '../config/global';
import { firebase } from '../config/firebaseConfig';

export default class UpdateProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         uid: '',
         fullname: '',
         phone: '',
         email: '',
         place: '',
         isLoading: false
      };
   }

   componentDidMount() {
      this.setState({
         uid: global.user.uid,
         email: global.user.email
      });
   }

   updateProfile() {
      const { fullname, email, phone, place } = this.state;
      firebase.database().ref('profiles').child(this.state.uid).set({
         fullname,
         email,
         phone,
         place
      });
   }

   render() {
      const { container, labelStyle, inputStyle, offset, closeBtn } = styles;
      return (
         <View style={container}>
            <StatusBar barStyle="dark-content" />   
            <TouchableOpacity
               style={closeBtn}
               onPress={() => this.props.navigation.goBack()}
            >
               <Icon name="md-close-circle" color="#757575" size={30} />
            </TouchableOpacity>
            <ScrollView>
               <View style={offset} />
               <View>
                  <FormLabel labelStyle={labelStyle}>FULLNAME</FormLabel>
                  <FormInput
                     ref={(input) => this.fullnameInput = input}  //eslint-disable-line   
                     inputStyle={inputStyle}
                     onChangeText={(text) => this.setState({ fullname: text })}
                     placeholder="Please enter your fullname..."
                     underlineColorAndroid="rgba(0,0,0,0)"
                     placeholderTextColor="#BDBDBD"
                     returnKeyType="next"
                     onSubmitEditing={() => this.phoneInput.focus()}
                  />
                  {/* <FormValidationMessage>Error message</FormValidationMessage> */}
               </View>
               <View>
                  <FormLabel labelStyle={labelStyle}>EMAIL</FormLabel>
                  <FormInput
                     ref={(input) => this.emailInput = input}  //eslint-disable-line  
                     value={this.state.email}   
                     inputStyle={inputStyle}
                     editable={false}
                     onChangeText={(text) => this.setState({ email: text })}
                     placeholder="Please enter your email..."
                     underlineColorAndroid="rgba(0,0,0,0)"
                     placeholderTextColor="#BDBDBD"
                     keyboardType="email-address"
                     returnKeyType="next"
                     onSubmitEditing={() => this.phoneInput.focus()}
                  />
                  {/* <FormValidationMessage>Error message</FormValidationMessage> */}
               </View>
               <View>
                  <FormLabel labelStyle={labelStyle}>PHONE NUMBER</FormLabel>
                  <FormInput
                     ref={(input) => this.phoneInput = input}  //eslint-disable-line     
                     inputStyle={inputStyle}
                     onChangeText={(text) => this.setState({ phone: text })}
                     placeholder="Please enter your phone number..."
                     underlineColorAndroid="rgba(0,0,0,0)"
                     placeholderTextColor="#BDBDBD"
                     keyboardType="phone-pad"
                     returnKeyType="next"
                     onSubmitEditing={() => this.placeInput.focus()}
                  />
                  {/* <FormValidationMessage>Error message</FormValidationMessage> */}
               </View>
               <View>
                  <FormLabel labelStyle={labelStyle}>PLACE</FormLabel>
                  <FormInput
                     ref={(input) => this.placeInput = input}  //eslint-disable-line    
                     inputStyle={inputStyle}
                     onChangeText={(text) => this.setState({ place: text })}
                     placeholder="Please select your place..."
                     underlineColorAndroid="rgba(0,0,0,0)"
                     placeholderTextColor="#BDBDBD"
                     returnKeyType="go"
                     onSubmitEditing={() => this.updateProfile()}
                  />
                  {/* <FormValidationMessage>Error message</FormValidationMessage> */}
               </View>
               <View>
                  <Button
                     containerViewStyle={{ marginTop: 20 }}   
                     loading={this.state.isLoading}
                     buttonStyle={{ backgroundColor: '#757575', height: 50 }}
                     fontSize={18}
                     fontWeight="500"
                     title={!this.state.isLoading ? 'SAVE' : null}
                     onPress={() => this.updateProfile()}
                  />
               </View>
            </ScrollView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF',
      position: 'relative'
   },
   labelStyle: {
      fontSize: 16,
      color: '#757575',
      fontWeight: '500'
   },
   inputStyle: {
      borderBottomColor: '#757575',
      borderBottomWidth: 1,
      paddingBottom: 2
   },
   offset: {
      height: 50
   },
   closeBtn: {
      position: 'absolute',
      backgroundColor: '#FFF',
      top: 20,
      left: 20,
      zIndex: 10
   }
});
