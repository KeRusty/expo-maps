
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    backButton: {
        paddingHorizontal: 20,
        paddingVertical: 44
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }



})
