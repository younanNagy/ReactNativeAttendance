import React from 'react';
import { StyleSheet, Text, View, Alert,AsyncStorage } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import GoogleSheet, { update } from 'react-native-google-sheet';
// import IonIcon from 'react-native-vector-icons/Ionicons';
import Scanner from './Scanner';

export default class Settings extends React.Component {

  state = {
    enableCamera: false,
    column:'',

  };

  upload=async()=> { //alert(typeof(this.state.column))
    try {
      if (this.state.column ==''||this.state.column =='A')
      { throw "Specify Column Name"} 
    
      let kids_ids=await AsyncStorage.getAllKeys();
      let attendance_of_kids=await AsyncStorage.multiGet(kids_ids);
      for (let [kid_id,Attendance] of attendance_of_kids) 
      {
        let kid_id_int=parseInt(kid_id);
        let response = await update({
          data: {
            values: [
              [Attendance],
            ],
            range: `${this.state.column}${kid_id_int}`
          },
          range: `${this.state.column}${kid_id_int}`
        });
        let item = await response.json();
      }
      AsyncStorage.clear();
      alert("Done");
   }
    catch (err) {
      alert(err)
    }
  };


  enableCamera = () => {
    this.setState(() => {
      let { enableCamera } = this.state;
      return {
        enableCamera: !enableCamera
      }
    });
  };


  render() {
    const clientId = '301690263990-25m072eorjt00pu8e888jevu2cv0kum8.apps.googleusercontent.com';
    const { enableCamera } = this.state;
    return (

    <View style={styles.container}>
             <GoogleSheet
         credentialsDetails={{
         clientId,
       }}
         spreadsheetId="18CQRrVIjoXJuwBULV2zu30Qsr9PXamZfWLn0dajSCpw"
       />
      {enableCamera?
      <Scanner enableCamera = {this.enableCamera}/>
    :
    <View>
  
    <View style = {styles.title}>
    {/* <Icon style={styles.cogGear} name='md-person-add' type='ionicon'/> */}
    <Text style={styles.titleText1}>Attendance</Text>
    
  </View>
  <View style={styles.Card}>
  <Button buttonStyle={styles.btnSave} title="Scan" type= "outline" titleStyle={styles.btnSaveTxt} onPress={this.enableCamera}/>
  
    <Text style={styles.titleText}>Settings:</Text>
    <Input placeholder="Sheet ID" placeholderTextColor = "grey"  style={styles.UrlInput}/>
    <Input placeholder="Column Name" 
          onChangeText={(column) => this.setState({column})} 
          placeholderTextColor = "grey"  style={styles.UrlInput}/>
    <Button buttonStyle={styles.btnSave} title="Upload" type= "outline" titleStyle={styles.btnSaveTxt} onPress={this.upload}/>
  </View>
  
  </View>
  
  }    
  </View>
         );
  
    }
}




const styles = StyleSheet.create({
  container: {
    paddingTop:35,
    paddingLeft:10,
    paddingRight:10,
    flex:1,
    backgroundColor: '#fff',
  },

  title: {
    borderBottomWidth:2,
    borderColor:'#000',
    paddingBottom: 10,
    marginBottom: 20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  
  Card: {
    display:'flex',
    flexDirection:'column'
  },

  titleText1: {
    color: '#000',
    fontSize:20,
    fontWeight: 'bold',
    marginLeft: 5
   },

  titleText: {
    color: '#000',
    fontSize:16,
    fontWeight: 'bold',
  },

  btnSave: {
    width:120,
    borderWidth:1,
    borderRadius:3,
    borderColor:'#000',
    marginTop:8,
    padding:2.5,
    alignSelf:'center',
  },
  btnSaveTxt: {
    color: '#000',
    fontWeight:'bold',
  },

});
