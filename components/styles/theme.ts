import { Dimensions } from 'react-native';

export const SizeFactorial: number = (() => {
  const window = Dimensions.get('window');

  if (window.height > 1) return 1;

  return 1;
})();

export enum Color {
  Black = 'black',
  Black85 = '#000000D9',
  Black40 = '#00000066',
  White = 'white',
  WhiteSmoke = 'whitesmoke',
  DarkGrey = '#212222',
  DarkGrey90 = '#212222E6',
  LightGrey = '#919191',
  FacebookBlue = '#5890FF',
  Green = '#37AF86',
  Yellow = '#ffcb3d',
  Red = 'red',
  Transparent = '#FFFFFF00'
}

export enum Size {
  BaseUnit = 8 * SizeFactorial
}

export enum Radius {
  Base = Size.BaseUnit * 0.5,
  Large = Size.BaseUnit * 1.5,
  Full = 999,
}

export enum BorderWidth {
  Base = Size.BaseUnit / 4
}

export enum Opacity {
  Opaque = 1,
  Translucent = 0.5
}

export const ShadowButton = {
  shadowColor: Color.Black,
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
  shadowOffset: {
    width: 0,
    height: 2,
  },
};

export const ShadowOverlay = {
  shadowColor: Color.Black,
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
  shadowOffset: {
    width: 0,
    height: 1,
  },
};

export const ShadowCard = {
  shadowColor: Color.Black,
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  elevation: 2,
  shadowOffset: {
    width: 0,
    height: 1,
  },
};

export default { /* default exports are not allowed. Explicit enum's only */ };
