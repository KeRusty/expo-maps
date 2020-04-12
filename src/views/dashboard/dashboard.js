import React, { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import PlacesSearchBar from '../../components/placesSearchBar';

import styles from './dashboard-styles';

export default function Dashboard(props) {

    const [origin, setOrigin] = useState();

    const [destination, setDestination] = useState();

    const onChangeOrigin = (places) => {
        setOrigin(places)
    }

    const onChangeDestination = (places) => {
        setDestination(places)
    }

    console.log(origin)
    console.log(destination)

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.searchContainer}>

                <Text style={styles.searchText}>Enter Two Points</Text>

                <View style={styles.searchBarContainer}>

                    <PlacesSearchBar placeholder="Enter Origin Here" onChange={onChangeOrigin} />

                    <PlacesSearchBar placeholder="Enter Destination Here" onChange={onChangeDestination} />

                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonText}>Go!</Text>

                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.searchContainer}>

                <Text style={styles.searchText}>Use Current Location</Text>

                <View style={styles.searchBarContainer}>

                    <PlacesSearchBar placeholder="Search Here for Destination" />

                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonText}>Go!</Text>

                    </TouchableOpacity>

                </View>

            </View>

        </SafeAreaView>
    );
}
