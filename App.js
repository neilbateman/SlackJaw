import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createContainer } from 'unstated-next';
import AppNavigator from './navigation/AppNavigator';

console.disableYellowBox = true;

export default function App(props) {
  let [count, setCount] = useState(0);
  let increment = () => setCount(count + 1);
  let decrement = () => setCount(count -1);
  let theme = useColorScheme();
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <AppearanceProvider>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator theme={'dark'}/>
        </AppearanceProvider>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
