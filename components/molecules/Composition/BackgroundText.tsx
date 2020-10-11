import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Color } from '../../styles/theme';

import Text, { TextType, TextAlign } from '../../atoms/Text';

export interface IBackgroundText {
  text: string;
  colorBackground: Color;
  colorForeground: Color;
}

export const BackgroundText = ({ text, colorBackground, colorForeground }: IBackgroundText) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colorBackground,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },

    containerText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text
          type={TextType.Heading}
          colorForeground={colorForeground}
          textAlign={TextAlign.Center}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default BackgroundText;
