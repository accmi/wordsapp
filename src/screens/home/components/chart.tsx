import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { AppStyles } from '../../../config/appStyles';
import { Colors } from '../../../config/colors';
import { View, Text } from '../../../shared/flexbox';
import { Measures } from '../../../utils/measures';

const mockChartData = [
  {
    date: new Date(2022, 2, 24),
    complition: 25,
  },
  {
    date: new Date(2022, 3, 24),
    complition: 100,
  },
  {
    date: new Date(2022, 4, 24),
    complition: 46,
  },
  {
    date: new Date(2022, 5, 24),
    complition: 14,
  },
  {
    date: new Date(2022, 6, 24),
    complition: 76,
  },
  {
    date: new Date(2022, 7, 24),
    complition: 100,
  },
  {
    date: new Date(2022, 8, 24),
    complition: 55,
  },
];
const getChartMonth = (date: Date) => {
  return dayjs(date).format('MMM');
};
export const ChartComponent = () => {
  const chartMonthHeight = useRef(Measures.getHeightPercantage(0.2));
  const chartMonthWidth = useRef(Measures.getWidthPercantage(0.05));
  const getCmpletionHigh = (complition: number) =>
    (chartMonthHeight.current * complition) / 100;

  return (
    <View
      flexDirection="row"
      marginHorizontal={AppStyles.containerPadding}
      padding={AppStyles.containerPadding}
      marginTop={15}
      justifyContent="space-between"
      backgroundColor={Colors.primaryRegular}
      borderRadius={AppStyles.borderRadius}
      elevation={4}
      shadowColor="#000"
      shadowOffset={{ width: 0.5, height: 0.5 }}
      shadowOpacity={0.3}
      shadowRadius={2}>
      {mockChartData.map((item, index) => (
        <View key={`${item.date.valueOf()}/${index}`} alignItems="center">
          <View
            position="relative"
            height={chartMonthHeight.current}
            width={chartMonthWidth.current}
            borderRadius={AppStyles.borderRadius}
            backgroundColor={Colors.primaryDark}>
            <View
              position="absolute"
              backgroundColor={Colors.redRegular}
              height={getCmpletionHigh(item.complition)}
              width={chartMonthWidth.current}
              bottom={0}
              borderRadius={AppStyles.borderRadius}
            />
          </View>
          <Text color={Colors.white}>{getChartMonth(item.date)}</Text>
        </View>
      ))}
    </View>
  );
};
