import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
