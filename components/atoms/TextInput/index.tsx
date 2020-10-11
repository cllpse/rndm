import React from 'react';

import debounce from 'lodash/debounce';

import {
  TextInput as TextInputShadowed,
  View,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

import { Color, Size, Opacity } from '../../styles/theme';

import { FontFamily, FontSize } from '../Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    minWidth: Size.BaseUnit * 7,
  },

  textInput: {
    fontFamily: FontFamily.Paragraph,
    fontSize: FontSize.Paragraph,
  },
});

export interface ITextInput {
  /**
   * Shadowed TextInput onChange event.
   */
  onChange?: (text: string) => void,

  /**
   * Enable password mode.
   */
  secureTextEntry?: boolean;

  /**
   * Shadowed KeyboardTypeOptions.
   */
  keyboardType: KeyboardTypeOptions,

  /**
   * Color of the text
   */
  color: Color;

  /**
   * Color of the placeholder text
   */
  placeholderTextColor: Color,

  /**
   * Placeholder string.
   */
  placeholder?: string;

  disabled?: boolean;
}

const TextInput = ({
  onChange,
  secureTextEntry,
  keyboardType,
  color,
  placeholderTextColor,
  placeholder = '',
  disabled = false,
}: ITextInput) => {


  const onChangeText = (text: string) => {
    if (onChange) {
      onChange(text);
    }
  };

  let containerStyle: any = styles.container;

  if (disabled) containerStyle = StyleSheet.flatten([containerStyle, { opacity: Opacity.Translucent }]);

  return (
    <>
      <View style={containerStyle}>
        <TextInputShadowed
          style={[styles.textInput, { color }]}
          keyboardAppearance="default"
          onChangeText={debounce(onChangeText, 600)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          selectionColor={Color.LightGrey}
          editable={!disabled}
        />
      </View>
    </>
  );
};

export default TextInput;
