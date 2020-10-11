import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

export interface IComposition {
  /**
   * Children of a Composition.
   *
   * Usually nested Compositions, Backgrounds, and Layouts.
   */
  children: ReactNode;

  /**
   * Should a <SafeAreaView> be used as a render container.
   *
   * Default: <View>.
   */
  useSafeAreaView?: boolean,

  /**
   * Grow height to take up any available vertical space.
   */
  explodeHeight?: boolean,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    width: '100%',
  },

  containerExplodeHeight: {
    height: '100%',
  },
});

/**
 * Component helper for composing layouts.
 *
 * A component can have one or more Backgrounds and a single Layout.
 */
const Composition = ({
  children,
  useSafeAreaView = false,
  explodeHeight = false,
}: IComposition) => {
  let style:any = styles.container;

  if (explodeHeight) style = StyleSheet.flatten([style, styles.containerExplodeHeight]);

  return (
    useSafeAreaView ? (
      <SafeAreaView style={style}>
        {children}
      </SafeAreaView>
    ) : (
      <View style={style}>
        {children}
      </View>
    )
  );
};

export default Composition;
