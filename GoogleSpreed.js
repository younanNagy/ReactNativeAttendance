
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,AsyncStorage } from 'react-native';

import GoogleSheet, { update } from 'react-native-google-sheet';

export default function GoogleSpreed() {
  const clientId = '301690263990-25m072eorjt00pu8e888jevu2cv0kum8.apps.googleusercontent.com';
  async function upload() {
    try {
      let cellName = 'B';
      let kids_ids=await AsyncStorage.getAllKeys();
      console.log(kids_ids);
      let attendance_of_kids=await AsyncStorage.multiGet(kids_ids);
      console.log(attendance_of_kids);

      for (let [kid_id,Attendance] of attendance_of_kids) 
      {
        let response = await update({
          data: {
            values: [
              [Attendance],
            ],
            range: `${cellName}${kid_id}`
          },
          range: `${cellName}${kid_id}`
        });
        let item = await response.json();
        console.log(item);
      }
      AsyncStorage.clear();
   } catch (err) {
      console.log(err)
      throw err;
    }
  }
  return (
    <View>
      <GoogleSheet
        credentialsDetails={{
          clientId,
        }}
        spreadsheetId="18CQRrVIjoXJuwBULV2zu30Qsr9PXamZfWLn0dajSCpw"
      />
      <TouchableOpacity style={styles.button} onPress={upload}>
        <Text>upload</Text>
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