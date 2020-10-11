import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Color } from '../../styles/theme';

import Composition, {
  LayoutXStartYStart,
  Spacer,
  SpacerSize,
  BackgroundColor,
} from '../Composition';

import Button, { ButtonType } from '../../atoms/Button';

import SvgArrowBack from '../../../assets/images/arrow_back_ios-24px.svg';

const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: Color.Black40,
  },

  view: {
    flex: 1,
    position: 'absolute',
    width: '70%',
    height: '100%',
    zIndex: 2,
  },
});

export interface IDrawer {
  navigation: any;
  isVisible: boolean;
  onDismiss: () => void;
}

const Drawer = ({ navigation, isVisible, onDismiss }: IDrawer) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={onDismiss}
      />

      <View style={styles.view}>
        <Composition
          explodeHeight
        >
          <BackgroundColor color={Color.White} />

          <Spacer size={SpacerSize.LargeVertical} />

          <Spacer size={SpacerSize.LargeVertical} />

          <LayoutXStartYStart>
            <Button
              omitShadow
              type={ButtonType.Solid}
              onPress={() => { navigation.navigate('BookDetails'); onDismiss(); }}
              colorBackground={Color.Transparent}
              colorForeground={Color.Black}
              icon={<SvgArrowBack />}
              title="Book Details"
            />

            <Spacer size={SpacerSize.MediumVertical} />

            <Button
              omitShadow
              type={ButtonType.Solid}
              onPress={() => { navigation.navigate('BookDetails'); onDismiss(); }}
              colorBackground={Color.Transparent}
              colorForeground={Color.Black}
              icon={<SvgArrowBack />}
              title="Book Details"
            />
          </LayoutXStartYStart>
        </Composition>
      </View>
    </>
  );
};

export default Drawer;
