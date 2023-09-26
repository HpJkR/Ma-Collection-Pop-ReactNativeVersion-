import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({ title }) => {
  return (
    <LinearGradient
      colors={['rgba(127,9,9,1)', 'rgba(152,45,7,1)', 'rgba(183,91,5,1)', 'rgba(204,122,4,1)', 'rgba(213,135,3,1)', 'rgba(255,197,0,1)']}
      start={{x: 0.0, y: 0.0}} 
      end={{x: 0.0, y: 1.0}}
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '5%',
  },
});

export default Header;
