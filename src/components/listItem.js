import React from 'react';
import {
   Text,
   StyleSheet
} from 'react-native';
import { Card } from 'react-native-elements';

const ListItem = ({ item }) => (
   <Card containerStyle={styles.container}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
   </Card>
);

export default ListItem;

const styles = StyleSheet.create({
   container: {
      margin: 5,
      borderWidth: 0,
      elevation: 0
   },
   itemTitle: {
      fontSize: 20,
      color: '#000'
   }
});
