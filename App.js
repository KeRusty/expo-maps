import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GOOGLE_API_KEY } from "react-native-dotenv";

export default function App() {
    console.log(GOOGLE_API_KEY)
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your Shitty app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
