import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { set, unset } from '../actions/test';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import SvgArrowBack from '../assets/images/arrow_back_ios-24px.svg';
import SvgMenu from '../assets/images/menu-24px.svg';

const BooksOverview = ({ navigation }) => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.test.message);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>BooksOverview{message}</Text>

        <Text style={styles.customFont}>BooksOverview{message}</Text>

        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('BookDetails')}
        />

        <SvgArrowBack width={24} height={24} />
        <SvgMenu width={24} height={24} />

        <Button
          title="Set"
          onPress={() => dispatch(set('Hello Press!'))}
        />

        <Button
          title="Unset"
          onPress={() => dispatch(unset())}
        />
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

  customFont: {
    color: Colors.black,
    fontFamily: "SFProDisplay-Medium",
  }
});

export default BooksOverview;
