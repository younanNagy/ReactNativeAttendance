// import React from 'react';
// import { View, StyleSheet,AsyncStorage,TouchableOpacity ,Text} from 'react-native';
// import GoogleSpreed from './GoogleSpreed';
// import BarcodeScannerExample from './Scanner';

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Scanner from './Scanner';
import Settings from './Settings';

const MainNavigator = createStackNavigator({
  Settings: {screen: Settings},
  Scanner: {screen: Scanner},
});

const App = createAppContainer(MainNavigator);

export default App;

// export default function App() {



  
//   // _storeData = async () => {
//   //   try {

//   //     await AsyncStorage.setItem('1', 'abanoub');
//   //     await AsyncStorage.setItem('2', 'gan');
//   //     await AsyncStorage.setItem('3', 'gon');
//   //     await AsyncStorage.setItem('4', 'mina');
//   //     console.log("data is stored");
//   //   } catch (error) {
//   //     // Error saving data
//   //   }
//   // };
//   return (
//     <View style={styles.container}>
//       <GoogleSpreed/>      

//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })



// <TouchableOpacity style={styles.container} onPress={_storeData}>
// <Text>Store Data</Text>
// </TouchableOpacity>