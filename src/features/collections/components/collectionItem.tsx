import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { appStylesMeasures } from '~config';
import { Text, View } from '~shared';
import { useCollectionParams } from '../hooks/useCollectionParams';
import { PlayIcon } from './playIcon';

type Props = {
  title: string;
  numberOfWords: number;
  progress: number;
};

export const CollectionItem: FC<Props> = ({
  title,
  numberOfWords,
  progress,
}) => {
  const [primaryColor, secondaryColor, icon] =
    useCollectionParams(numberOfWords);

  return (
    <View
      backgroundColor={primaryColor}
      flexDirection="row"
      borderRadius={appStylesMeasures.borderRadius}
      padding={appStylesMeasures.containerPadding}>
      <View
        backgroundColor={secondaryColor}
        padding={appStylesMeasures.containerPadding - 5}
        borderRadius={appStylesMeasures.borderRadius}>
        <Image source={icon} style={style.icon} />
      </View>
      <View flexBasis={'5%'} />
      <View justifyContent="space-around" flex={1}>
        <Text color={secondaryColor}>{title}</Text>
        <Text color={secondaryColor}>{numberOfWords} words</Text>
      </View>
      <View position="relative" alignSelf="flex-end">
        <PlayIcon
          primaryColor={secondaryColor}
          secondaryColor={secondaryColor}
          progress={progress}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
});
