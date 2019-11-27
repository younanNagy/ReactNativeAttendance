import React from 'react';
import { View, StyleSheet,AsyncStorage,TouchableOpacity ,Text} from 'react-native';
import GoogleSpreed from './GoogleSpreed';

export default function App() {


  _storeData = async () => {
    try {
      await AsyncStorage.setItem('test', 'I like to save it.');
      console.log("data is stored");
    } catch (error) {
      // Error saving data
    }
  };
  return (
    <View style={styles.container}>
      <GoogleSpreed></GoogleSpreed>

      <TouchableOpacity style={styles.container} onPress={_storeData}>
        <Text>Store Data</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})