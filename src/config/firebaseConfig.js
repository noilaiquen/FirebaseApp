import * as RNFirebase from 'firebase';

const config = {
   apiKey: 'AIzaSyAXF74wwhtzMzHkqcDsWrIHKPNOwtliUsY',
   authDomain: 'react-native-first-6f0ab.firebaseapp.com',
   databaseURL: 'https://react-native-first-6f0ab.firebaseio.com',
   projectId: 'react-native-first-6f0ab',
   storageBucket: 'react-native-first-6f0ab.appspot.com',
   messagingSenderId: '426520836445'
};
 
export const firebase = RNFirebase.initializeApp(config);
