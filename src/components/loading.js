import React from 'react';
import {
   Modal,
   StyleSheet,
   View,
   Dimensions,
   ActivityIndicator,
   Text
} from 'react-native';

const screen = Dimensions.get('window');

const Loading = (isVisible, text) => (
   <Modal
      visible={isVisible}
      animationType={'none'}
      transparent
      onRequestClose={() => null}
   >
      <View style={styles.container}>
         <View style={styles.modalBody}>   
            <ActivityIndicator size={30} color="#FFF" />
            <Text style={styles.textLoading}>
               ...{text || 'Loading'}
            </Text>
         </View>
      </View>   
   </Modal>   
);

export default Loading;

const styles = StyleSheet.create({
   container: {
      width: screen.width,
      height: screen.height,
      backgroundColor: 'rgba(0,0,0,0.3)',
      justifyContent: 'center',
      alignItems: 'center'
   },
   modalBody: {
      width: 100,
      height: 100,
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,0.3)',
      justifyContent: 'center',
      alignItems: 'center'
   },
   textLoading: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold'
   }
});

