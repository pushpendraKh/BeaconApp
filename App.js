import React, { Component } from 'react';
import { StyleSheet, View, DeviceEventEmitter } from 'react-native';
import Banner from './Components/Banner';
import ButtonsView from './Components/ButtonsView';
import { Beacon } from './Components/BeaconInit';
import Beacons from 'react-native-beacons-manager'

const region = { 
  identifier: 'Estimotes',
  uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
};

const anotherRegion = {
  identifier: 'Estimotes1',
  uuid: 'edd1ebea-c04e-5def-a017-d2f400f1f261'
}

export default class App extends Component {

  componentWillMount = () => {
    Beacons.requestWhenInUseAuthorization()
    Beacons.startMonitoringForRegion(region)
    Beacons.startRangingBeaconsInRegion(region)
    .then( () => { console.log('Beacons ranging started succesfully')})

    Beacons.startRangingBeaconsInRegion(anotherRegion)
    .then( () => { console.log('Beacons ranging started succesfully')})
    Beacons.startUpdatingLocation()
    
    console.log("Beacons-Data")
    const subscription = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        console.log("Beacons-Data")
        console.log(data)
      }
    );
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.bannerContainer }>
          <Banner/>
          <ButtonsView navigation = { this.props.navigation }/>
          <ButtonsView navigation = { this.props.navigation }/>
        </View>  
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bannerContainer: {
    flex: 1,
    marginTop: 20,
  },
});