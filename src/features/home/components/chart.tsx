import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { View, Text } from '~shared';
import { getWidthPercantage, getHeightPercantage } from '~utils';

import { appColors, appStylesMeasures } from '~config';

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
  const chartMonthHeight = useRef(getHeightPercantage(0.2));
  const chartMonthWidth = useRef(getWidthPercantage(0.05));
  const getCmpletionHigh = (complition: number) =>
    (chartMonthHeight.current * complition) / 100;

  return (
    <View
      flexDirection="row"
      marginHorizontal={appStylesMeasures.containerPadding}
      padding={appStylesMeasures.containerPadding}
      marginTop={15}
      justifyContent="space-between"
      backgroundColor={appColors.primaryRegular}
      borderRadius={appStylesMeasures.borderRadius}
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
            borderRadius={appStylesMeasures.borderRadius}
            backgroundColor={appColors.primaryDark}>
            <View
              position="absolute"
              backgroundColor={appColors.redRegular}
              height={getCmpletionHigh(item.complition)}
              width={chartMonthWidth.current}
              bottom={0}
              borderRadius={appStylesMeasures.borderRadius}
            />
          </View>
          <Text color={appColors.white}>{getChartMonth(item.date)}</Text>
        </View>
      ))}
    </View>
  );
};
