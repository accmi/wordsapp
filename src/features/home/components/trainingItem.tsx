import React, { FC, memo } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { appStyles, appStylesMeasures, appColors } from '~config';
import { Text, View } from '~shared';
import { getWidthPercantage, getHeightPercantage } from '~utils';

type TrainingItemProps = {
  color: string;
  amount: number;
  title: string;
};

const TrainingItemComponent: FC<TrainingItemProps> = ({
  color,
  amount,
  title,
}) => (
  <View
    backgroundColor={color}
    borderRadius={appStylesMeasures.borderRadius}
    borderWidth={1}
    borderColor={appColors.primaryRegular}
    padding={appStylesMeasures.containerPadding}
    marginHorizontal={appStylesMeasures.containerPadding}
    width={getWidthPercantage(0.38)}
    height={getHeightPercantage(0.15)}
    justifyContent="space-between">
    <Text color={appColors.white} fontSize={appStyles.h2}>
      {title}
    </Text>
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Text color={appColors.white} fontSize={appStyles.h3}>
        {amount}
      </Text>
      <Icon name="rocket" size={20} color={appColors.white} />
    </View>
  </View>
);

export const TrainingItem = memo(TrainingItemComponent);
