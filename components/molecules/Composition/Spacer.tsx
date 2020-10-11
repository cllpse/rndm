import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Size } from '../../styles/theme';

export enum SpacerSize {
  TinyVertical,
  SmallVertical,
  MediumVertical,
  LargeVertical,

  TinyHorizontal,
  SmallHorizontal,
  MediumHorizontal,
  LargeHorizontal,
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 0,
    flexGrow: 0,
  },
});

export interface ISpacer {
  size: SpacerSize
}

export const Spacer = ({ size }: ISpacer) => {
  let width = 0;
  let height = 0;

  switch (size) {
    case SpacerSize.TinyVertical:
      height = 0.5;
      break;

    case SpacerSize.SmallVertical:
      height = 2;
      break;

    case SpacerSize.MediumVertical:
      height = 3;
      break;

    case SpacerSize.LargeVertical:
      height = 7;
      break;

    case SpacerSize.TinyHorizontal:
      width = 0.5;
      break;

    case SpacerSize.SmallHorizontal:
      width = 2;
      break;

    case SpacerSize.MediumHorizontal:
      width = 3;
      break;

    case SpacerSize.LargeHorizontal:
      width = 7;
      break;

    default:
      break;
  }

  const style = StyleSheet.flatten([
    styles.container,
    {
      width: Size.BaseUnit * width,
      height: Size.BaseUnit * height,
    },
  ]);

  return (
    <View style={style} />
  );
};

export default Spacer;
