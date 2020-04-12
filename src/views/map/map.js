import React, { useState, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import styles from './map-styles';


export default function Map(props) {

    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const origin = props.navigation.state.params.origin ? props.navigation.state.params.origin : null
    const destination = props.navigation.state.params.destination ? props.navigation.state.params.destination : null
    const locationDestination = props.navigation.state.params.locationDestination ? props.navigation.state.params.locationDestination : null

    console.log(origin)
    console.log(destination)
    console.log(locationDestination)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        })();
    }, []);

    return (
        <View style={styles.container}>

            {location &&
                <MapView
                    style={styles.mapStyle}
                    provider="google"
                    zoomEnabled={true}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title={"My Location"}
                    />

                </MapView>
            }

        </View>
    );
}
