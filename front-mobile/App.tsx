import { useFonts } from 'expo-font';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/Header';
import AppLoading from 'expo-app-loading';
import Home from './src/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Header />
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});