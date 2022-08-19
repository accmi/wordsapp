import React, { FC } from 'react';
import { View } from '~shared';

type Props = {
  title: string;
  numberOfWords: number;
  progress: number;
};

enum CollectionType {
  easy,
  mid,
  hard,
}

const getCollectionParams = (numberOfWords: number) => {
  const isEasy = numberOfWords <= 20;
  const isMid = numberOfWords <= 80 && numberOfWords > 20;
  const isHard = numberOfWords > 100;

  if (isEasy) {
    return CollectionType.easy;
  }

  if (isMid) {
    return CollectionType.mid;
  }

  if (isHard) {
    return CollectionType.hard;
  }
};

export const CollectionItem: FC<Props> = ({
  title,
  numberOfWords,
  progress,
}) => (
  <View>
    <View></View>
    <View></View>
    <View></View>
  </View>
);
