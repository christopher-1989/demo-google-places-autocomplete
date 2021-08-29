import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GooglePlacesInput from './PlacesSearch';


export default function App() {
  return (
    <View style={{    flex: 1,
      padding: 10,
      paddingTop: 60,
      backgroundColor: '#ecf0f1',
      }}>
      <GooglePlacesInput 
      />
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
