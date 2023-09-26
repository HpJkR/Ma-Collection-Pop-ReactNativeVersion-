import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Header from './components/HeaderPop'
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Ma collection de pop Harry Potter" />
      <StatusBar />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
});
