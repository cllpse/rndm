import React, { ReactNode } from 'react';

import { Text as TextShadowed, StyleSheet } from 'react-native';

import { Color, SizeFactorial } from '../../styles/theme';

export enum FontFamily {
  Paragraph = 'SFProDisplay-Medium',
  ParagraphBold = 'SFProDisplay-Medium',
  Highlight = 'SFProDisplay-Medium',
  Heading = 'SFProDisplay-Medium',
  HeadingSmall = 'SFProDisplay-Medium',
  Caption = 'SFProDisplay-Medium',
  Button = 'SFProDisplay-Medium'
}

export enum FontSize {
  Paragraph = 16 * SizeFactorial,
  Highlight = 20 * SizeFactorial,
  Heading = 72 * SizeFactorial,
  HeadingSmall = 40 * SizeFactorial,
  Caption = 12 * SizeFactorial,
  Button = 14 * SizeFactorial
}

export enum LineHeight {
  Paragraph = 20 * SizeFactorial,
  Highlight = 24 * SizeFactorial,
  Heading = 64 * SizeFactorial,
  HeadingSmall = 40 * SizeFactorial,
  Caption = 14 * SizeFactorial,
  Button = 16 * SizeFactorial,
}

export enum TextType {
  Paragraph = 'paragraph',
  Highlight = 'highlight',
  Heading = 'heading',
  HeadingSmall = 'headingSmall',
  Caption = 'caption',
  Button = 'button'
}

export enum FontWeight {
  Normal,
  Bold
}

export enum TextDecorationLine {
  None = 'none',
  Underline = 'underline'
}

export enum TextStyle {
  Normal = 'normal',
  Italic = 'italic'
}

export enum TextAlign {
  Start = 'left',
  Center = 'center',
  End = 'right'
}

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: FontFamily.Paragraph,
    fontSize: FontSize.Paragraph,
    lineHeight: LineHeight.Paragraph,
  },

  paragraphBold: {
    fontFamily: FontFamily.ParagraphBold,
    fontSize: FontSize.Paragraph,
    lineHeight: LineHeight.Paragraph,
  },

  highlight: {
    fontFamily: FontFamily.Highlight,
    fontSize: FontSize.Highlight,
    lineHeight: LineHeight.Highlight,
    width: '100%',
  },

  heading: {
    fontFamily: FontFamily.Heading,
    fontSize: FontSize.Heading,
    lineHeight: LineHeight.Heading,
  },

  headingSmall: {
    fontFamily: FontFamily.Heading,
    fontSize: FontSize.HeadingSmall,
    lineHeight: LineHeight.HeadingSmall,
  },

  caption: {
    fontFamily: FontFamily.Caption,
    fontSize: FontSize.Caption,
    lineHeight: LineHeight.Caption,
  },

  button: {
    fontFamily: FontFamily.Button,
    fontSize: FontSize.Button,
    lineHeight: LineHeight.Button,
  },
});

interface IStyle {
  paragraph: object;
  highlight: object;
  heading: object;
  headingSmall: object;
  caption: object;
  button: object;
  [index: string]: object
}

export interface IText {
  children: ReactNode;
  type: TextType;
  colorForeground: Color;
  colorBackground?: Color;
  fontWeight?: FontWeight;
  textStyle?: TextStyle;
  textDecorationLine?: TextDecorationLine;
  textAlign?: TextAlign;
}

const Text = ({
  children,
  type,
  colorForeground,
  colorBackground = undefined,
  fontWeight = undefined,
  textStyle = undefined,
  textDecorationLine = undefined,
  textAlign = TextAlign.Start,
}: IText) => {
  let style = (styles as IStyle)[type];

  if (type === TextType.Paragraph) {
    if (fontWeight === FontWeight.Bold) {
      style = (styles as IStyle).paragraphBold;
    }

    if (textStyle) {
      style = StyleSheet.flatten([style, { fontStyle: textStyle.toString() }]);
    }
  }

  if (type === TextType.Paragraph) {
    if (textDecorationLine) {
      style = StyleSheet.flatten([style, { textDecorationLine: textDecorationLine.toString() }]);
    }
  }

  style = StyleSheet.flatten([
    style,
    { color: colorForeground, textAlign },
    colorBackground ? { backgroundColor: colorBackground } : {},
  ]);

  return (
    <TextShadowed style={style}>
      {children}
    </TextShadowed>
  );
};

export default Text;
