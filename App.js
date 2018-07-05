import React, { Component } from 'react';
import { StyleSheet, View, DeviceEventEmitter, Platform, ScrollView } from 'react-native';
import Banner from './Components/Banner';
import ButtonsView from './Components/ButtonsView';
import { Beacon } from './Components/BeaconInit';
import Beacons from 'react-native-beacons-manager'
import CustomButton from './Components/CustomButton';

const region = { 
  identifier: 'Estimotes',
  uuid: '152CCC34-FEBA-32C4-914D-4086C69A8C2E' ///'F548DB0F-A13F-4FD5-A060-5362E3826171'//'152CCC34-FEBA-32C4-914D-4086C69A8C2E' //'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
};

const anotherRegion = {
  identifier: 'Estimotes1',
  uuid: 'edd1ebea-c04e-5def-a017-d2f400f1f261'
}

export default class App extends Component {

  componentWillMount = () => {

    if (Platform.OS === 'ios') {
      Beacons.requestWhenInUseAuthorization()
      Beacons.startMonitoringForRegion(region)
      Beacons.startRangingBeaconsInRegion(region)
      .then( () => { console.log('Beacons ranging started succesfully')})
      
      console.log("Beacons-Data")
      const subscription = DeviceEventEmitter.addListener(
        'beaconsDidRange',
        (data) => {
          console.log("Beacons-Data")
          console.log(data)
        }
      );
    } else {
      Beacons.detectIBeacons()
        try {
          Beacons.startRangingBeaconsInRegion('REGION1')
          console.log(`Beacons ranging started succesfully!`)
        } catch (err) {
          console.log(`Beacons ranging not started, error: ${error}`)
        }

        DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
          console.log('Found beacons!', data.beacons)
})
    }
  }

  render() {
    return (
      <View style = {styles.container}>
         <ScrollView>
          <View style = {styles.bannerContainer }>
            <Banner/>
            <View style = { styles.buttonView } >
              <ButtonsView navigation = { this.props.navigation }/>
              <ButtonsView navigation = { this.props.navigation }/>
            </View>
          </View>
         </ScrollView>  
      </View>
    );
  }

  componentWillUnmount = () => {
    console.log('Component Unmounted')
    Beacons.stopRangingBeaconsInRegion(region)
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  bannerContainer: {
    flex: 2,
    marginTop: 20,
  },

  buttonView: {
    margin: 20,
  },

  bottomView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

});