import React from 'react';
import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native';

import PlacesSearchBar from '../../components/placesSearchBar';

import styles from './dashboard-styles';


export default function Dashboard(props) {

    console.log(props.navigation.navigate)

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.twoPointsContainer}>
                <Text style={styles.twoPointsText}>Enter Two Points</Text>

                <View style={styles.searchBarContainer}>
                    <PlacesSearchBar placeholder="Enter Origin Here" />
                </View>

                <View style={styles.searchBarContainer}>
                    <PlacesSearchBar placeholder="Enter Destination Here" />
                </View>

            </View>

            <View style={styles.currentLocationContainer}>
                <Text style={styles.currentLocationText}>Use Current Location</Text>

                <View style={styles.searchBarContainer}>
                    <PlacesSearchBar placeholder="Search Here" />
                </View>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate("map")}>
                <Text style={styles.currentLocationText}>TEST</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
