import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import PlacesSearchBar from '../../components/placesSearchBar';

import styles from './map-styles';


export default function Dashboard() {


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


        </SafeAreaView>
    );
}
