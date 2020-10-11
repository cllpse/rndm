import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Dummy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Dummy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
  },

  text: {
    color: 'white',
  },
});

export default Dummy;
