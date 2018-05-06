import React, { Component } from 'react';
import {
   View,
   Text,
   ScrollView,
   StyleSheet,
   Image
} from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import { firebase } from '../config/firebaseConfig';
import avatar from '../../assets/img/avatar.jpg';
import CustomButton from '../components/customButton';

export default class Profile extends Component {
   onLogout() {
      firebase.auth().signOut().catch(error => {
         console.log(error);
      });
   }

   render() {
      const {
         container, avatarImg, cardContainer,
         lisContainer, btnLogout, btnText } = styles;
      return (
         <View style={container}>
            <ScrollView>
               <Card containerStyle={cardContainer}>
                  <View style={{ flexDirection: 'row' }}>   
                     <Image source={avatar} style={avatarImg} />
                     <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 20, color: '#3498db', fontWeight: '700' }}>THANH BINH NGUYEN</Text>
                        <Text style={{ fontSize: 14, color: '#FF9800' }}>Thành viên mới</Text>
                     </View>
                  </View>
                  <View>
                     <List>
                        <ListItem
                           title="0888 127 277"
                           leftIcon={{ name: 'phone' }}
                        />
                        <ListItem
                           title="nguyenthanhbinh255@gmail.com"
                           leftIcon={{ name: 'mail' }}
                        />
                     </List>
                  </View>
               </Card>   
               <Card containerStyle={cardContainer}>
                  <List containerStyle={lisContainer}>
                     <ListItem
                        title="Sông lũy, Bắc Bình, Bình Thuận"
                        leftIcon={{ name: 'phone' }}
                     />
                     <ListItem
                        title="Information"
                        leftIcon={{ name: 'mail' }}
                     />
                     <ListItem
                        title="Hồ Chí Minh"
                        leftIcon={{ name: 'phone' }}
                     />
                  </List>
               </Card>
               <Card containerStyle={cardContainer}>
                  <CustomButton
                     text="LOGOUT"
                     style={btnLogout}
                     styleText={btnText}
                     action={this.onLogout}
                  />
               </Card>
            </ScrollView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   avatarImg: {
      width: 100,
      height: 100,
      borderRadius: 50,
      resizeMode: 'contain'
   },
   cardContainer: {
      margin: 5,
      borderWidth: 0,
      elevation: 0
   },
   lisContainer: {
      marginTop: 0
   },
   btnLogout: {
      backgroundColor: '#757575'
   },
   btnText: {
      color: '#FFF'
   }
});
