import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  appStyles,
  appStylesMeasures,
  appInputStyle,
  appColors,
} from '~config';
import { Text, View } from '~shared';
import { TrainingItem } from './components/trainingItem';
import { ChartComponent } from './components/chart';
import { mockTraining } from './mockData/trainings';

type trainigType = typeof mockTraining[0];

enum SecionsType {
  search,
  chart,
  training,
}

const sectinos = [
  {
    type: SecionsType.search,
    data: ['Search for words'],
  },
  {
    type: SecionsType.chart,
    data: [''],
  },
  {
    type: SecionsType.training,
    data: [''],
  },
];

export const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const renderTrainingItem = ({
    item: { color, title, amount },
  }: {
    item: trainigType;
  }) => <TrainingItem color={color} title={title} amount={amount} />;

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectinos}
        keyExtractor={(_, index) => String(index)}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { type } }) => {
          switch (type) {
            case SecionsType.search:
              return null;
            case SecionsType.chart:
              return (
                <View
                  marginTop={55}
                  marginHorizontal={appStylesMeasures.containerPadding}>
                  <Text color={appColors.white} fontSize={appStyles.h1}>
                    Progress
                  </Text>
                </View>
              );
            case SecionsType.training:
              return (
                <View
                  marginTop={55}
                  marginHorizontal={appStylesMeasures.containerPadding}>
                  <Text color={appColors.white} fontSize={appStyles.h1}>
                    Training
                  </Text>
                </View>
              );
          }
        }}
        renderItem={({ section: { type }, item }) => {
          switch (type) {
            case SecionsType.search:
              return (
                <KeyboardAvoidingView>
                  <TextInput
                    style={styles.input}
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder={item}
                    placeholderTextColor={appColors.gray}
                    selectionColor={appColors.white}
                    keyboardAppearance="dark"
                  />
                </KeyboardAvoidingView>
              );
            case SecionsType.training:
              return (
                <FlatList
                  style={styles.trainingContainer}
                  data={mockTraining}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={({ id }) => String(id)}
                  renderItem={renderTrainingItem}
                />
              );
            case SecionsType.chart:
              return <ChartComponent />;
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primaryLight,
  },
  input: {
    ...appInputStyle,
    marginHorizontal: appStylesMeasures.containerPadding,
    marginTop: 35,
  },
  trainingContainer: {
    marginVertical: 15,
  },
});
