import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import { Size, Color } from '../../styles/theme';

import TextInput, { TextInputValidationScheme } from '../../atoms/TextInput';

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
        validationScheme={TextInputValidationScheme.None}
        placeholderTextColor={Color.Black85}
        keyboardType="default"
        placeholder="Search..."
        color={Color.Black}
        borderColor={Color.White}
      />
    </View>
  );
};

export default HeaderRight;
