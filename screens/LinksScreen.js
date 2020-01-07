import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import MapView from 'react-native-maps';

export default function LinksScreen() {
  return (
      <View style ={{flex: 1}}>
         <MapView
    initialRegion={{
      latitude: 45.5289487,
      longitude: -122.6983163,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    provider={MapView.PROVIDER_GOOGLE}
    style={styles.mapStyle}
  />
  </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
