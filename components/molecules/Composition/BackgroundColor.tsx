import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Color } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export interface IBackgroundColor {
  color: Color;
}

export const BackgroundColor = ({ color }: IBackgroundColor) => {
  const style = StyleSheet.flatten([styles.container, { backgroundColor: color }]);

  return <View style={style} />;
};

export default BackgroundColor;
