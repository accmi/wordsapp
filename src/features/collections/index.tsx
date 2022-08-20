import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { appColors, appStylesMeasures } from '~config';
import { View } from '~shared';
import { CollectionItem } from './components';
// import { AppStyles } from '../../config/appStyles';
// import { Colors } from '../../config/colors';
// import { Text, View } from '../../shared/flexbox';

const mockedCollections = [
  {
    id: '0',
    title: 'How I met your mother',
    numberOfWords: 20,
    progress: 0.8,
  },
  {
    id: '1',
    title: 'Intermediate',
    numberOfWords: 60,
    progress: 0.3,
  },
  {
    id: '3',
    title: 'Advanced',
    numberOfWords: 100,
    progress: 0.3,
  },
  {
    id: '4',
    title: 'Intermediate',
    numberOfWords: 60,
    progress: 0.3,
  },
  {
    id: '5',
    title: 'Advanced',
    numberOfWords: 100,
    progress: 0.3,
  },
  {
    id: '6',
    title: 'How I met your mother',
    numberOfWords: 20,
    progress: 0.8,
  },
];

export const CollectionsScreen = () => (
  <FlatList
    style={styles.container}
    data={mockedCollections}
    ItemSeparatorComponent={() => <View height={25} />}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primaryLight,
    padding: appStylesMeasures.containerPadding,
  },
});
