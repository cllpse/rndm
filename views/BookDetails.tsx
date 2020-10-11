import React from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const BookDetails = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>BookDetails</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
  },

  text: {
    color: Colors.black,
  },
});

export default BookDetails;
