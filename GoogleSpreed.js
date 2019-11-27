
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,AsyncStorage } from 'react-native';

//import GoogleSheet, { batchGet, get, append, update } from 'react-native-google-sheet';

export default function GoogleSpreed() {
  const clientId = '511531055584-d4i13lcubp7v5rh3f560dn4isl9f0sp2.apps.googleusercontent.com';
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('test');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  // async function _onPressButton() {
  //   try {
  //     let cellName = 'A';
  //     let names = Array.from({ length: 20 }, (_, index) => ({ name: Math.random().toString(36).substring(2), id: index + 1 }));
  //     for (let { name, id } of names) {
  //       console.log({ name, id })
  //       let itemFetch = await update({
  //         data: {
  //           values: [
  //             [name],
  //           ],
  //           range: `${cellName}${id}`
  //         },
  //         range: `${cellName}${id}`
  //       });
  //       console.log(itemFetch);
  //       let item = await itemFetch.json();
  //       console.log(item);
  //     }

  //     ? Fetch Rows
  //     let itemFetch = await get({ range: 'Sheet2!A1:C2' });
  //     console.log(itemFetch);
  //     let item  = await itemFetch.json();
  //     console.log(item)
  //     ? Append Row
  //     let itemFetch = await append({
  //       data: {
  //         values: [
  //           ["123"],
  //           ["123456789"]
  //           ["123456789"]
  //         ],
  //         range: 'B5'
  //       },
  //       range: 'B5'
  //     });
  //     console.log(itemFetch);
  //     let item  = await itemFetch.json();
  //     console.log(item)
  
  //   } catch (err) {
  //     console.log(err)
  //     throw err;
  //   }
  // }
  return (
    <View>
      {/* <GoogleSheet
        credentialsDetails={{
          clientId,
        }}
        spreadsheetId="1_k1Kl-elK4oLlcWvQdR_xgavqKe4tIIRlcptIYKn8Jg"
      /> */}
      <TouchableOpacity style={styles.button} onPress={_retrieveData}>
        <Text>Get Data</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 60
  }
})
//KeyID=88acb25ba49be38f0b5b98ab2f7b87eafcdf5717

//Api key=AIzaSyCNga2uvMQHSk1KMxsFiv8yXLlepV2_NXo 


//client id =511531055584-d4i13lcubp7v5rh3f560dn4isl9f0sp2.apps.googleusercontent.com 