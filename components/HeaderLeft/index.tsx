import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import { Size, Color } from '../styles/theme';

import Button, { ButtonType } from '../atoms/Button';

import SvgMenu from '../../assets/images/menu-24px.svg';

export interface IHeaderLeft {
  onMenuButtonClick: () => void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Size.BaseUnit * 2,
    justifyContent: 'center',
  },
});

const HeaderLeft = ({ onMenuButtonClick }: IHeaderLeft) => {
  return (
    <View style={styles.container}>
      <Button
        omitShadow={true}
        type={ButtonType.Solid}
        onPress={onMenuButtonClick}
        colorBackground={Color.Transparent}
        colorForeground={Color.Black}
        icon={<SvgMenu />}
      />
    </View>
  );
};

export default HeaderLeft;
