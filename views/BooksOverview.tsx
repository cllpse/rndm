import React, { useEffect } from 'react';

import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { fetch } from '../actions/mock';

import { Color, Size, Opacity } from '../components/styles/theme';

import Text, { TextType } from '../components/atoms/Text';

import Composition, {
  BackgroundText,
  LayoutXStartYStart,
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

const Card = ({ item }, navigation ) => {
  const onPress = () => {
    navigation.navigate('BookDetails', { id: item.id });
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={Opacity.Opaque}
      >
        <Composition explodeHeight>
          <BackgroundCard color={Color.White} />

          {/* <BackgroundImage source={require('../assets/images/poster.png')} /> */}

          {/* <BackgroundText
              text={`LOADING\nPLEASE WAIT`}
              colorBackground={Color.White}
              colorForeground={Color.WhiteSmoke}
          /> */}

          <LayoutXStartYStart>
            <Text type={TextType.Highlight} colorForeground={Color.DarkGrey}>
              {item.title}
            </Text>
          </LayoutXStartYStart>
        </Composition>
      </TouchableOpacity>
    </View>
  );
};

const BooksOverview = ({ navigation }) => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.mock.data);

  useEffect(() => {
    dispatch(fetch());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={(item) => Card(item, navigation)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default BooksOverview;
