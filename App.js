/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Dialog from './custon_dialog';

onpressClose=()=>{
  console.log('---------------------------333333------------------------');
}

const App: () => React$Node = () => {
  return (
    <View style={styles.fu}>
      <TouchableOpacity
        onPress={() => {
          this.dialog.show({
            title: '头',
            content: '内容',
            closeonPress: () => {
              this.onpressClose();
            },
          });
        }}>
        <View style={styles.zi} />
      </TouchableOpacity>

      <Dialog
        ref={ref => {
          this.dialog = ref;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fu: {
    flex: 1,
    flexDirection: 'column',
  },
  zi: {
    width: 50,
    height: 50,
    backgroundColor: '#65d2ff',
    position: 'relative',
    left: 50,
    alignSelf: 'center',
  },
});

export default App;
