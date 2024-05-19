import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import PlayScreen from './src/PlayScreen'; // Ensure the correct path

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PlayScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  
  },
});

export default App;
