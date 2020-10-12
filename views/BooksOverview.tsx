import React, { useEffect } from 'react';

import { View, StyleSheet, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { fetch } from '../actions/mock';

import { Color, Size } from '../components/styles/theme';

import Text, { TextType } from '../components/atoms/Text';

import Composition, {
  BackgroundText,
  LayoutXStartYStart,
  Spacer,
  SpacerSize,
  BackgroundCard,
  BackgroundImage,
} from '../components/molecules/Composition';

const styles = StyleSheet.create({
  container: {
    padding: Size.BaseUnit
  },

  card: {
    flex: 1,
    flexGrow: 1,
    margin: Size.BaseUnit,
    height: Size.BaseUnit * 40,
  },
});

const Card = ({ item }) => {
  console.log('card', item);
  return (
    <View style={styles.card}>
      <Composition explodeHeight>
        <BackgroundCard color={Color.White} />

        {/* <BackgroundImage source={require('../assets/images/poster.png')} /> */}

        <LayoutXStartYStart>
          <Text type={TextType.Highlight} colorForeground={Color.Black85}>
            {item.title}
          </Text>
        </LayoutXStartYStart>
      </Composition>
    </View>
  );
};

const BooksOverview = ({ navigation }) => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.mock.data);

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={Card}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default BooksOverview;
