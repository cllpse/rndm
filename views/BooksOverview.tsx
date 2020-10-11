import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { set, unset } from '../actions/test';

import { Color } from '../components/styles/theme';

import Button, { ButtonType } from '../components/atoms/Button';

import Text, { TextType } from '../components/atoms/Text';

import Composition, {
  BackgroundText,
  LayoutXStartYStartScroll,
  LayoutXCenterYCenter,
  Spacer,
  SpacerSize,
  BackgroundCard,
} from '../components/molecules/Composition';

const BooksOverview = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    /* ... */
  });

  const message = useSelector(state => state.test.message);

  return (
    <Composition
      useSafeAreaView
      explodeHeight
    >
      <LayoutXStartYStartScroll>
        <Composition>
          <BackgroundCard color={Color.White} />

          <LayoutXCenterYCenter>
            <Spacer size={SpacerSize.LargeVertical} />
            <Spacer size={SpacerSize.LargeVertical} />
            <Spacer size={SpacerSize.LargeVertical} />
          </LayoutXCenterYCenter>
        </Composition>
      </LayoutXStartYStartScroll>
    </Composition>
  );
};

export default BooksOverview;
