import React, { FC, memo } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AppStyles } from '../../../config/appStyles';
import { Colors } from '../../../config/colors';
import { Text, View } from '../../../shared';
import { Measures } from '../../../utils/measures';

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
    borderRadius={AppStyles.borderRadius}
    borderWidth={1}
    borderColor={Colors.primaryRegular}
    padding={AppStyles.containerPadding}
    marginHorizontal={AppStyles.containerPadding}
    width={Measures.getWidthPercantage(0.38)}
    height={Measures.getHeightPercantage(0.15)}
    justifyContent="space-between">
    <Text {...AppStyles.getHeadline(Colors.white, 2)}>{title}</Text>
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Text {...AppStyles.getHeadline(Colors.white, 3)}>{amount}</Text>
      <Icon name="rocket" size={20} color={Colors.white} />
    </View>
  </View>
);

export const TrainingItem = memo(TrainingItemComponent);
