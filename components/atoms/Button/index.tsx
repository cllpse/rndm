import React, { ReactNode } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from 'react-native';

import {
  Color,
  Size,
  Radius,
  ShadowButton,
  Opacity,
} from '../../styles/theme';

import Text, { TextType, TextDecorationLine, TextAlign } from '../../atoms/Text';

export enum ButtonType {
  Solid,
  Naked
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: Radius.Base * 1.15,
    alignSelf: 'stretch',
  },

  buttonContainerBlack: {
    backgroundColor: 'black',
  },

  buttonContainerNoTitle: {
    borderRadius: Radius.Full,
    alignSelf: 'flex-start',
  },

  buttonContainerCollapseWidth: {
    alignSelf: 'auto',
  },

  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: Size.BaseUnit * 5.5,
    paddingLeft: Size.BaseUnit * 2,
    paddingRight: Size.BaseUnit * 2,
    borderRadius: Radius.Base,
  },

  buttonContentNoTitle: {
    width: 'auto',
    height: 'auto',
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: Radius.Full,
  },

  linkContainer: {
    /* ... */
  },

  linkContent: {
    /* ... */
  },

  iconContainer: {
    marginLeft: 0 - Size.BaseUnit,
    marginRight: Size.BaseUnit,
  },

  iconContainerNoTitle: {
    /* ... */
  },
});

export interface IButton {
  onPress: (event: GestureResponderEvent) => void;

  type?: ButtonType;

  /**
   * Text value of the Button.
   */
  title?: string;

  /**
   * Include an Icon within the button.
   * NOTE: ButtonType.Link will not accept an Icon.
   */
  icon?: ReactNode;

  /**
   * The color of the background on ButtonType.Solid
   *
   * Naked buttons do not accept Icons.
   */
  colorBackground?: Color;

  /**
   * The color of the text of a Button.
   */
  colorForeground?: Color;

  /**
   * Collapse width to fit content.
   */
  collapseWidth?: boolean;

  omitShadow?: boolean;

  textAlign?: TextAlign;

  disabled?: boolean;
}

const Button = ({
  onPress,
  type = ButtonType.Solid,
  title = undefined,
  icon = undefined,
  colorBackground = Color.Black,
  colorForeground = Color.White,
  collapseWidth,
  omitShadow = false,
  textAlign = TextAlign.Center,
  disabled = false,
}: IButton) => {
  let styleButtonContainer:any = styles.buttonContainer;
  let styleButtonContent:any;
  let textType = TextType.Button;
  let textDecorationLine = TextDecorationLine.None;

  if (collapseWidth) {
    styleButtonContainer = StyleSheet.flatten([
      styleButtonContainer,
      styles.buttonContainerCollapseWidth,
    ]);
  }

  if (type === ButtonType.Solid) {
    styleButtonContent = StyleSheet.flatten([
      styles.buttonContent,
      omitShadow ? {} : ShadowButton,
      { backgroundColor: colorBackground.toString() },
      textAlign === TextAlign.Start && { justifyContent: 'flex-start' },
    ]);
  }

  if (colorBackground !== Color.Transparent) {
    styleButtonContainer = StyleSheet.flatten([
      styleButtonContainer,
      styles.buttonContainerBlack,
    ]);
  }

  if (!title && icon) {
    styleButtonContainer = StyleSheet.flatten([
      styleButtonContainer,
      styles.buttonContainerNoTitle,
    ]);

    styleButtonContent = StyleSheet.flatten([
      styleButtonContent,
      styles.buttonContentNoTitle,
    ]);
  }

  if (type === ButtonType.Naked) {
    textType = TextType.Paragraph;
    textDecorationLine = TextDecorationLine.Underline;
  }

  let style = type === ButtonType.Solid ? styleButtonContainer : styles.linkContainer;

  if (disabled) style = StyleSheet.flatten([style, { opacity: Opacity.Translucent }]);

  return (
    <View style={style}>
      <TouchableOpacity
        onPress={disabled ? () => { } : onPress}
        activeOpacity={disabled ? Opacity.Opaque : Opacity.Translucent}
      >
        <View style={type === ButtonType.Solid ? styleButtonContent : styles.linkContent}>
          {icon && (
            <View style={title ? styles.iconContainer : styles.iconContainerNoTitle}>
              {icon}
            </View>
          )}

          {title && (
            <Text
              type={textType}
              textDecorationLine={textDecorationLine}
              colorForeground={colorForeground}
              textAlign={textAlign}
            >
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
