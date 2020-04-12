import React, { useState, useEffect } from 'react';
import { Dimensions, View, TouchableOpacity, Text } from 'react-native';
import MapView from 'react-native-maps';
import { GOOGLE_API_KEY } from "react-native-dotenv";
import MapViewDirections from 'react-native-maps-directions';
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
                        latitude: (origin && destination) ? origin.geometry.location.lat : (location && locationDestination) ? location.latitude : null,
                        longitude: (origin && destination) ? origin.geometry.location.lng : (location && locationDestination) ? location.longitude : null,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    }}
                >
                    <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>

                        <Text style={styles.buttonText}>Back</Text>

                    </TouchableOpacity>

                    {origin &&
                        <MapView.Marker
                            coordinate={{
                                latitude: origin.geometry.location.lat,
                                longitude: origin.geometry.location.lng,
                            }}
                            title={"Origin"}
                        />
                    }

                    {destination &&
                        <MapView.Marker
                            coordinate={{
                                latitude: destination.geometry.location.lat,
                                longitude: destination.geometry.location.lng,
                            }}
                            title={"Destination"}
                        />
                    }

                    {(location && locationDestination) &&
                        <MapView.Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                            title={"My Location"}
                        />
                    }

                    {(location && locationDestination) &&
                        <MapView.Marker
                            coordinate={{
                                latitude: locationDestination.geometry.location.lat,
                                longitude: locationDestination.geometry.location.lng,
                            }}
                            title={"Destination"}
                        />
                    }

                    {(origin && destination) &&
                        <MapViewDirections
                            origin={{
                                latitude: origin.geometry.location.lat,
                                longitude: origin.geometry.location.lng
                            }}
                            destination={{
                                latitude: destination.geometry.location.lat,
                                longitude: destination.geometry.location.lng
                            }}
                            apikey={GOOGLE_API_KEY}
                            strokeWidth={3}
                            strokeColor="blue"
                            optimizeWaypoints={true}
                        />
                    }

                    {(location && locationDestination) &&
                        <MapViewDirections
                            origin={{
                                latitude: location.latitude,
                                longitude: location.longitude
                            }}
                            destination={{
                                latitude: locationDestination.geometry.location.lat,
                                longitude: locationDestination.geometry.location.lng
                            }}
                            apikey={GOOGLE_API_KEY}
                            strokeWidth={3}
                            strokeColor="blue"
                            optimizeWaypoints={true}
                        />
                    }

                </MapView>
            }

        </View>
    );
}
