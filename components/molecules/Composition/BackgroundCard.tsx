import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Color, ShadowCard, Radius } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Radius.Base,
  },
});

export interface IBackgroundCard {
  color: Color;
}

export const BackgroundCard = ({ color }: IBackgroundCard) => {
  const style = StyleSheet.flatten([
    styles.container,
    ShadowCard,
    { backgroundColor: color },
  ]);

  return <View style={style} />;
};
