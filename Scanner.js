import * as React from 'react';
import { Text, View, StyleSheet, Button,AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Settings from './Settings';


export default class Scanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };


  render() {
      
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text style={{marginTop:15}}>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text style={{marginTop:15}}>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 60,
          marginBottom:20
        }}>
        
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
        <Button title={'Back'} onPress={this.props.enableCamera} />
      </View>
    );
  }

  handleBarCodeScanned = async({ type, data }) => {
    this.setState({ scanned: true });
    await AsyncStorage.setItem(data, '1');
    alert(`Id =${data} Scanned!!`);
  };
}

