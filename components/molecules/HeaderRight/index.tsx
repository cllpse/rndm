import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import { Size, Color } from '../../styles/theme';

import TextInput from '../../atoms/TextInput';

export interface IHeaderRight {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: Size.BaseUnit * 2,
  },
});

const HeaderRight = ({}: IHeaderRight) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="default"
        placeholder="Search..."
        color={Color.Black}
        placeholderTextColor={Color.Black40}
      />
    </View>
  );
};

export default HeaderRight;
