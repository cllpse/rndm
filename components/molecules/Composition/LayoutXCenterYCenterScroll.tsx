import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Size } from '../../styles/theme';

import ILayout from './ILayout';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  padding: {
    padding: Size.BaseUnit * 2,
  },
});

/**
 * Layout centering it's content on X and Y axis.
 * This Layout enables scrolling.
 */
export const LayoutXCenterYCenterScroll = ({ children, omitPadding = false }: ILayout) => {
  let style = styles.container as any;

  if (!omitPadding) style = StyleSheet.flatten([style, styles.padding]);

  return (
    <ScrollView contentContainerStyle={style}>
      {children}
    </ScrollView>
  );
};

export default LayoutXCenterYCenterScroll;
