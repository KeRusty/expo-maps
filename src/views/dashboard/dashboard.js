import React from 'react';
import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native';

import PlacesSearchBar from '../../components/placesSearchBar';

import styles from './dashboard-styles';

export default function Dashboard(props) {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Enter Two Points</Text>

                <View style={styles.searchBarContainer}>
                    <PlacesSearchBar placeholder="Enter Origin Here" />
                    <PlacesSearchBar placeholder="Enter Destination Here" />
                </View>

            </View>

            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Use Current Location</Text>

                <View style={styles.searchBarContainer}>
                    <PlacesSearchBar placeholder="Search Here" />
                </View>
            </View>

            <View style={styles.searchContainer}>

                <TouchableOpacity onPress={() => props.navigation.navigate('map')}>
                    <Text style={styles.searchText}>Map</Text>
                </TouchableOpacity>



            </View>

        </SafeAreaView>
    );
}
