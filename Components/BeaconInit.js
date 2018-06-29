import { DeviceEventEmitter } from 'react-native';
import Beacons from 'react-native-beacons-manager'

export class Beacon {
    constructor() {
          const region = { 
            identifier: 'Estimotes',
            uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
            //'edd1ebea-c04e-5def-a017-d2f400f1f261'
            //  
            //  'edd1ebea-c04e-5def-a017-ec60602275fb'
            //  'edd1ebea-c04e-5def-a017-face050697ea'
          };
          
          Beacons.requestWhenInUseAuthorization()
          Beacons.startMonitoringForRegion(region)
          Beacons.startRangingBeaconsInRegion(region)
          Beacons.startUpdatingLocation()
    }
}