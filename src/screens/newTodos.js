import React, { Component } from 'react';
import {
   StyleSheet,
   View,
   FlatList,
   Text,
   Button,
   StatusBar,
   TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-elements';
import { firebase } from '../config/firebaseConfig';
// import global from '../config/global';

export default class NewTodos extends Component {
   constructor(props) {
      super(props);
      this.itemRef = firebase.database();
      this.state = {
         todoList: []
      };
   }

   componentDidMount() {
      this.listenForItems();
   }

   listenForItems() {
      let items = [];
      this.itemRef.ref('todos').on('child_added', dataSnapshot => {
         items.push({
            key: dataSnapshot.key,
            title: dataSnapshot.val().title,
            content: dataSnapshot.val().content,
            status: dataSnapshot.val().status
         });

         this.setState({
            todoList: items
         });
      });
      
      this.itemRef.ref('todos').on('child_removed', dataSnapshot => {
         items = items.filter(i => i.key !== dataSnapshot.key);

         this.setState({
            todoList: items
         });
      });
   }

   removeItem(item) {
      this.itemRef.ref('todos').child(item.key).remove();
      this.listenForItems();
   }

   renderItem(item) {
      const { cardContainer, itemTitle } = styles;
      return (
         <TouchableOpacity onPress={() => this.removeItem(item)} >
            <Card containerStyle={cardContainer}>
               <Text style={itemTitle}>{item.title}</Text>
               <Text>{item.content}</Text>
            </Card>
         </TouchableOpacity>
      );
   }

   render() {
      const { container } = styles;
      const { todoList } = this.state;
      return (
         <View style={container}>
            <StatusBar barStyle="dark-content" />   
            <View style={{ flex: 1 }}>  
               <FlatList
                  data={todoList}
                  extraData={this.state}
                  keyExtractor={(item) => item.key}
                  renderItem={({ item }) => this.renderItem(item)}
               />
            </View>
            <Button
               onPress={() => {
                  this.itemRef.ref('todos').push({
                     title: 'title',
                     content: 'content',
                     status: 1
                  });
               }}
               title="Add"
               color="#841584"
            />
         </View>   
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   cardContainer: {
      margin: 5,
      borderWidth: 0,
      elevation: 0
   },
   itemTitle: {
      fontSize: 20,
      color: '#000'
   }
});
