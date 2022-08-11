import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  StyleSheet,
  TextInput,
} from 'react-native';
import { AppStyles } from '../../config/appStyles';
import { Colors } from '../../config/colors';
import { Text, View } from '../../shared';
import { TrainingItem } from './components/trainingItem';
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
        renderSectionHeader={({ section: { type } }) => {
          switch (type) {
            case SecionsType.search:
              return null;
            case SecionsType.chart:
              return null;
            case SecionsType.training:
              return (
                <View
                  marginTop={55}
                  marginHorizontal={AppStyles.containerPadding}>
                  <Text {...AppStyles.getHeadline(Colors.white, 1)}>
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
                    placeholderTextColor={Colors.gray}
                    selectionColor={Colors.white}
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
              return null;
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
  },
  input: {
    ...AppStyles.input,
    marginHorizontal: AppStyles.containerPadding,
    marginTop: 35,
  },
  trainingContainer: {
    marginVertical: 15,
  },
});
