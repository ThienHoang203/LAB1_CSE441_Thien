/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import data from './Data';
import Square from './Square';
import styles from './style';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default App=()=> {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index)=> (
        <Square key={item} text={`Square ${index + 1}`}/>
      ))}
    </ScrollView>
  );
};
