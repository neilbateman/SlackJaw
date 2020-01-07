import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {
  createAppContainer,
  Themed,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

function A() {
  return (
    <View style={styles.container}>
      <Themed.Text>B</Themed.Text>
    </View>
  );
}

A.navigationOptions = { title: 'Hello from A' };

function B() {
  return (
    <View style={styles.container}>
      <Themed.Text>B</Themed.Text>
    </View>
  );
}

B.navigationOptions = { title: 'Hello from B!!!!' };

let StackA = createStackNavigator({ A });
let StackB = createStackNavigator({ B });
let Tabs = createBottomTabNavigator({ StackA, StackB });
let Navigation = createAppContainer(Tabs);

export default function App() {
  let theme = useColorScheme();

  return (
    <AppearanceProvider>
      <Navigation theme='dark' />
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});