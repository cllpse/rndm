import React, { useRef, useState, useEffect } from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

import { Color, Opacity, Size } from '../styles/theme';

import Composition, {
  LayoutXStartYStart,
  Spacer,
  SpacerSize,
  BackgroundColor,
} from '../molecules/Composition';

import Text, { TextType, TextAlign } from '../atoms/Text';
import Button, { ButtonType } from '../atoms/Button';
import Image, { ImageShape, ImageRatio } from '../molecules/Image';
import RequestState from '../molecules/RequestState';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },

  animatedViewOpacity: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },

  touchableOpacity: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Color.Black40,
  },

  animatedViewLeft: {
    flex: 1,
    position: 'absolute',
    width: '70%',
    height: '100%',
    zIndex: 1,
  },
});

export interface IDrawer {
  navigation: any;
  isVisible: boolean;
  onDismiss: () => void;
}

const Drawer = ({ navigation, isVisible, onDismiss }: IDrawer) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const leftAnimimation = useRef(new Animated.Value(0)).current;

  const width = Dimensions.get('screen').width;

  const [zIndex, SetZIndex] = useState(-1);

  useEffect(() => {
    if (isVisible) {
      SetZIndex(1);
    }
  });

  if (isVisible) {
    Animated.timing(opacityAnimation, { toValue: 1, duration: 100, useNativeDriver: true } as any).start();

    Animated.timing(leftAnimimation, { toValue: 0, duration: 200, useNativeDriver: false } as any).start();
  } else {
    Animated.timing(leftAnimimation, { toValue: 0 - width, duration: 100, useNativeDriver: false } as any).start();

    Animated.timing(opacityAnimation, { toValue: 0, duration: 200, useNativeDriver: true } as any).start(() => {
      SetZIndex(-1);
    });
  }

  if (zIndex === -1) {
    return null;
  }

  return (
    <View style={[ styles.container, { zIndex: zIndex }]}>
      <Animated.View style={[ styles.animatedViewOpacity, { opacity: opacityAnimation } ]}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={onDismiss}
          activeOpacity={Opacity.Opaque}
        />
      </Animated.View>

      <Animated.View style={[ styles.animatedViewLeft, { left: leftAnimimation } ]}>
        <Composition
          explodeHeight
        >
          <BackgroundColor color={Color.White} />

          <Spacer size={SpacerSize.LargeVertical} />

          <Spacer size={SpacerSize.LargeVertical} />

          <LayoutXStartYStart>
            <Text
              type={TextType.Highlight}
              colorForeground={Color.Black85}
              textAlign={TextAlign.Center}
            >
              Genres
            </Text>

            <Spacer size={SpacerSize.LargeVertical} />

            <Button
              collapseWidth
              omitShadow
              type={ButtonType.Solid}
              onPress={() => { /* navigation.navigate('BookDetails'); */ onDismiss(); }}
              colorBackground={Color.Transparent}
              colorForeground={Color.Black}
              icon={(
                <Image
                  source={require('../../assets/images/icon-drama.png')}
                  width={Size.BaseUnit * 4}
                  ratio={ImageRatio.Square}
                  shape={ImageShape.Circle}
                  state={RequestState.Done}
                />
              )}
              title="Drama"
            />

            <Spacer size={SpacerSize.MediumVertical} />

            <Button
              collapseWidth
              omitShadow
              type={ButtonType.Solid}
              onPress={() => { /* navigation.navigate('BookDetails'); */ onDismiss(); }}
              colorBackground={Color.Transparent}
              colorForeground={Color.Black}
              icon={(
                <Image
                  source={require('../../assets/images/icon-action.png')}
                  width={Size.BaseUnit * 4}
                  ratio={ImageRatio.Square}
                  shape={ImageShape.Circle}
                  state={RequestState.Done}
                />
              )}
              title="Action"
            />

            <Spacer size={SpacerSize.MediumVertical} />

            <Button
              collapseWidth
              omitShadow
              type={ButtonType.Solid}
              onPress={() => { /* navigation.navigate('BookDetails'); */ onDismiss(); }}
              colorBackground={Color.Transparent}
              colorForeground={Color.Black}
              icon={(
                <Image
                  source={require('../../assets/images/icon-comedy.png')}
                  width={Size.BaseUnit * 4}
                  ratio={ImageRatio.Square}
                  shape={ImageShape.Circle}
                  state={RequestState.Done}
                />
              )}
              title="Comedy"
            />

            <Spacer size={SpacerSize.MediumVertical} />

            <Button
              collapseWidth
              omitShadow
              type={ButtonType.Solid}
              onPress={() => { /* navigation.navigate('BookDetails'); */ onDismiss(); }}
              colorBackground={Color.Transparent}
              colorForeground={Color.Black}
              icon={(
                <Image
                  source={require('../../assets/images/icon-animation.png')}
                  width={Size.BaseUnit * 4}
                  ratio={ImageRatio.Square}
                  shape={ImageShape.Circle}
                  state={RequestState.Done}
                />
              )}
              title="Animation"
            />

            <Spacer size={SpacerSize.MediumVertical} />

            <Button
              collapseWidth
              omitShadow
              type={ButtonType.Solid}
              onPress={() => { /* navigation.navigate('BookDetails'); */ onDismiss(); }}
              colorBackground={Color.Transparent}
              colorForeground={Color.Black}
              icon={(
                <Image
                  source={require('../../assets/images/icon-terror.png')}
                  width={Size.BaseUnit * 4}
                  ratio={ImageRatio.Square}
                  shape={ImageShape.Circle}
                  state={RequestState.Done}
                />
              )}
              title="Terror"
            />

            <Spacer size={SpacerSize.MediumVertical} />
          </LayoutXStartYStart>
        </Composition>
      </Animated.View>
    </View>
  );
};

export default Drawer;
