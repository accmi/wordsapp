import React, { useRef } from 'react';
import { AppStyles } from '../../../config/appStyles';
import { Colors } from '../../../config/colors';
import { View, Text } from '../../../shared/flexbox';
import { Measures } from '../../../utils/measures';

const mockChartData = [
  {
    date: new Date('24.02.2022'),
    complition: 25,
  },
  {
    date: new Date('24.03.2022'),
    complition: 100,
  },
  {
    date: new Date('24.04.2022'),
    complition: 46,
  },
  {
    date: new Date('24.05.2022'),
    complition: 14,
  },
  {
    date: new Date('24.06.2022'),
    complition: 76,
  },
  {
    date: new Date('24.07.2022'),
    complition: 100,
  },
  {
    date: new Date('24.08.2022'),
    complition: 55,
  },
];
const getChartMonth = (date: Date) => {
  return date.toLocaleString('en-US', { month: 'short' });
};
export const ChartComponent = () => {
  const chartMonthLength = useRef(Measures.getHeightPercantage(0.3));
  return (
    <View
      flexDirection="row"
      marginHorizontal={AppStyles.containerPadding}
      padding={AppStyles.containerPadding}
      marginTop={15}
      justifyContent="space-between"
      backgroundColor={Colors.primaryRegular}
      borderRadius={AppStyles.borderRadius}
      elevation={4}>
      {mockChartData.map((item, index) => (
        <View key={`${item.month}/${index}`} alignItems="center">
          <View
            position="relative"
            height={chartMonthLength.current}
            width={Measures.getWidthPercantage(0.05)}
            borderRadius={AppStyles.borderRadius}
            backgroundColor={Colors.primaryDark}>
            <View position="absolute" backgroundColor={Colors.redRegular} />
          </View>
          <Text color={Colors.white}>{getChartMonth(item.date)}</Text>
        </View>
      ))}
    </View>
  );
};
