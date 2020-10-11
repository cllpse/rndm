import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Size } from '../../styles/theme';

import ILayout from './ILayout';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  padding: {
    padding: Size.BaseUnit * 2,
  },
});

/**
 * Layout aligning it's content to the start of X and Y axis.
 */
export const LayoutXStartYStart = ({ children, omitPadding = false }: ILayout) => {
  let style = styles.container as any;

  if (!omitPadding) style = StyleSheet.flatten([style, styles.padding]);

  return (
    <View style={style}>
      {children}
    </View>
  );
};

export default LayoutXStartYStart;
