import React from 'react';
import {
   Text,
   StyleSheet,
   Dimensions,
   TouchableOpacity,
   ActivityIndicator
} from 'react-native';

const { width } = Dimensions.get('window');

const CustomButton = props => {
   const { text, isLoading, style, styleText, action } = props;
   const { container, textBtn } = styles;
   return (
      <TouchableOpacity
         style={[container, style ? style : {}]}
         onPress={() => { action ? action() : null }}
      >
         {isLoading ? (
            <ActivityIndicator
               animating
               color="rgba(255,255,255,0.7)"
               size="large"
            />
            ) : (
               <Text style={[textBtn, styleText ? styleText : {}]}>{text}</Text>
            )
         } 
      </TouchableOpacity>
   );
};

export default CustomButton;

const styles = StyleSheet.create({
   container: {
      height: 40,
      width: width * 0.9,
      backgroundColor: '#2980b9',
      alignItems: 'center',
      justifyContent: 'center'
   },
   textBtn: {
      fontSize: 16,
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 'bold'
   }
});

