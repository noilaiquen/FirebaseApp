import React from 'react';
import {
   View,
   StyleSheet
} from 'react-native';

const Card = props => (
   <View
      style={
         [
            {
               marginTop: props.isFirst ? 5 : 0,
               height: props.height ? props.height : 250
            }, styles.container
         ]
      }
   >
      {props.children}
   </View>   
);

export default Card;

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#FFF',
      padding: 10,
      elevation: 2,
      marginBottom: 5,
      marginHorizontal: 5
   }
});
