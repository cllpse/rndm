import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Color } from '../components/styles/theme';

import Text, { TextType } from '../components/atoms/Text';

import Composition, {
  BackgroundText,
  LayoutXStartYStart,
  BackgroundColor,
  Spacer,
  SpacerSize,
} from '../components/molecules/Composition';

import { fetchById } from '../actions/mock';

const BookDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.mock.dataById);

  const { id } = route.params;

  useEffect(() => {
    dispatch(fetchById(id));
  }, []);

  return (
    <Composition explodeHeight>
      <BackgroundColor color={Color.White} />

      {!data && (
        <BackgroundText
          text={`LOADING\nPLEASE WAIT`}
          colorBackground={Color.White}
          colorForeground={Color.WhiteSmoke}
        />
      )}

      <LayoutXStartYStart omitPadding={false}>
        <Text type={TextType.HeadingSmall} colorForeground={Color.DarkGrey}>
          {data && data[0].title}
        </Text>

        <Spacer size={SpacerSize.MediumVertical} />

        <Text type={TextType.Highlight} colorForeground={Color.DarkGrey}>
           {data && `Issue Number ${data[0].issueNumber}`}
        </Text>

        <Spacer size={SpacerSize.MediumVertical} />

        <Text type={TextType.Paragraph} colorForeground={Color.DarkGrey}>
           {data && `${data[0].description || ''}`}
        </Text>
      </LayoutXStartYStart>
    </Composition>
  );
};

export default BookDetails;
