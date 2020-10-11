import React from 'react';

import {
  View,
  StyleSheet,
  Image as ImageShadowed,
} from 'react-native';

import RequestState from '../RequestState';

import { Color, BorderWidth, Radius } from '../../styles/theme';

export enum ImageShape {
  Square,
  Circle
}

export enum ImageRatio {
  Square,
  FourToThree
}

export interface IImage {
  uri: string;
  width: number;
  shape: ImageShape;
  ratio: ImageRatio;
  state: RequestState;
}

const styles = StyleSheet.create({
  container: {},

  containerOutlined: {
    borderStyle: 'solid',
    borderColor: Color.DarkGrey,
    borderWidth: BorderWidth.Base,
  },
});

const Image = ({
  uri,
  width,
  shape,
  ratio,
  state,
}: IImage) => {
  let styleDimensions = { width: 1 * width, height: 1 * width };

  if (ratio === ImageRatio.FourToThree) {
    styleDimensions = { width: 1 * width, height: 0.75 * width };
  }

  let styleContainer = StyleSheet.flatten([styles.container, styleDimensions]);

  if (state === RequestState.Loading) {
    styleContainer = StyleSheet.flatten([styleContainer, styles.containerOutlined]);
  }

  if (shape === ImageShape.Circle) {
    styleContainer = StyleSheet.flatten([styleContainer, { borderRadius: Radius.Full, overflow: 'hidden' }]);
  }

  return (
    <View style={styleContainer}>
      {state === RequestState.Done && (
        <ImageShadowed
          source={{ uri }}
          style={styleDimensions}
        />
      )}
    </View>
  );
};

export default Image;
