import 'react-native-gesture-handler';

import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import { Provider } from 'react-redux'

import { test } from './reducers/index';
import { root } from './sagas/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BooksOverview from './views/BooksOverview';
import BookDetails from './views/BookDetails';

import HeaderLeft from './components/molecules/HeaderLeft';
import HeaderRight from './components/molecules/HeaderRight';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ test }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(root);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BooksOverview">
          <Stack.Screen name="BooksOverview" component={BooksOverview} options={{ headerTitle: '', headerLeft: props => <HeaderLeft />, headerRight: props => <HeaderRight /> }} />
          <Stack.Screen name="BookDetails" component={BookDetails} options={{ headerTitle: '', headerRight: props => <HeaderRight /> }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
