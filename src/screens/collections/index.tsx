import React from 'react';
import { FlatList } from 'react-native';
import { CollectionItem } from './components';
// import { AppStyles } from '../../config/appStyles';
// import { Colors } from '../../config/colors';
// import { Text, View } from '../../shared/flexbox';

const mockedCollections = [
  {
    id: '0',
    title: 'How I met your mother',
    numberOfWords: 20,
    progress: 0.5,
  },
];

export const CollectionsScreen = () => (
  <FlatList
    data={mockedCollections}
    keyExtractor={item => item.id}
    renderItem={({ item: { title, numberOfWords, progress } }) => (
      <CollectionItem
        title={title}
        numberOfWords={numberOfWords}
        progress={progress}
      />
    )}
  />
);
