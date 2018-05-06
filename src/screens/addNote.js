import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet
} from 'react-native';
import { database, firebase } from '../config/firebaseConfig';

export default class AddNote extends Component {
   constructor(props) {
      super(props);
      this.state = {
         uid: '',
         title: '',
         content: ''
      };
   }

   componentDidMount() {
      this.getProfile();
   }

   getProfile() {
      const user = firebase.auth().currentUser;
      if (user) {
         this.setState({ uid: user.uid });
      }
   }
   
   addNote() {
      const { note, uid } = this.state;
      if (note === '' || uid === '') return false;

      database.ref('notes').child(`user-${uid}`).push({
         title: 'This is title note',
         content: 'This is content note' 
      });
   }

   render() {
      const { container } = styles;
      return (
         <View style={container}>
            <Text>ADD NOTE</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F90'
   }
});

