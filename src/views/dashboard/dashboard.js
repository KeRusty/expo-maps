import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlacesSearchBar from '../../components/placesSearchBar';

import styles from './dashboard-styles';


export default function Dashboard() {
    return (
        <View style={styles.container}>

            <View style={styles.twoPointsContainer}>
                <Text style={styles.twoPointsText}>Enter Two Points</Text>

                <View style={styles.searchBarContainer}>
                    <PlacesSearchBar placeholder="Search Here" />
                </View>

            </View>

            <View style={styles.currentLocationContainer}>
                <Text style={styles.currentLocationText}>Use Current Location</Text>
            </View>

        </View>
    );
}
