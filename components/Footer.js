import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PopAcquise from './PopAcquise';
import PopNonAcquise from './PopNonAcquise';

import Approuved from '../assets/PopImg/approuver.png'
import Rejeted from '../assets/PopImg/rejeter.png'

export default function Footer() {
  const [activeComponent, setActiveComponent] = useState('A');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {activeComponent === 'A' && <PopAcquise />}
        {activeComponent === 'B' && <PopNonAcquise />}
      </View>
      <LinearGradient
        colors={['rgba(127,9,9,1)', 'rgba(152,45,7,1)', 'rgba(183,91,5,1)', 'rgba(204,122,4,1)', 'rgba(213,135,3,1)', 'rgba(255,197,0,1)']}
        start={{x: 0.0, y: 0.0}} 
        end={{x: 0.0, y: 1.0}}
        style={styles.footer}>
        <View style={styles.buttonFooterContainer}>
          <TouchableOpacity onPress={() => setActiveComponent('A')}>
            <Image source={Approuved} style={styles.buttonFooter2}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveComponent('B')}>
            <Image source={Rejeted} style={styles.buttonFooter}/>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    height: '10%'
  },
  buttonFooterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  buttonFooter: {
    width: 60,
    height: 60
  },
  buttonFooter2: {
    width: 70,
    height: 70
  }
});
