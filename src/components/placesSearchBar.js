import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PlacesInput from 'react-native-places-input';
import { GOOGLE_API_KEY } from "react-native-dotenv";

export default function PlacesSearchBar(props) {

    const [place, setPlace] = useState();

    (event) => { event.preventDefault(); app.signIn(event.target.email.value, event.target.password.value); }

    return (
        <PlacesInput
            placeHolder={props.placeholder}
            googleApiKey={GOOGLE_API_KEY}
            onSelect={place => setPlace(place.result)}
            language={"en-US"}
            stylesContainer={{
                position: 'relative',
                alignSelf: 'stretch',
                margin: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                shadowOpacity: 0,
                borderColor: '#dedede',
                borderWidth: 1,
                marginBottom: 10
            }}
            stylesList={{
                top: 50,
                borderColor: '#dedede',
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1,
                left: -1,
                right: -1
            }}
        />
    );
}
