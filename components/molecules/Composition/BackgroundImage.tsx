import React from 'react';
import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native';

import { Radius } from '../../styles/theme';

export interface IBackgroundImage {
  source: ImageSourcePropType;
}

export const BackgroundImage = ({ source }: IBackgroundImage) => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Radius.Base,
    },

    image: {
      flex: 1,
      flexGrow: 1,
      width: '100%',
      borderRadius: Radius.Base,
    }
  });

  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={styles.image}
        />
    </View>
  );
};

export default BackgroundImage;
