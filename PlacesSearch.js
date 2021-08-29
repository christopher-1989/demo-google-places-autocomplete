import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {API_KEY} from "@env"

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      returnKeyType={'default'}
      minLength={3}
      fetchDetails={true}
      query={{
        key: API_KEY,
        language: 'en',
        components: 'country:au'
      }}
    />
  );
};

export default GooglePlacesInput;