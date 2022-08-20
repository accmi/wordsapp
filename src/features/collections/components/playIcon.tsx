import React, { FC } from 'react';
import Svg, { Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { View } from '~shared';

const size = 50;
const strokeWidth = 3.5;
const radius = (size - strokeWidth) / 2;
const circum = radius * 2 * Math.PI;

type Props = {
  primaryColor: string;
  secondaryColor: string;
  progress: number;
};

const getSvgProgress = (progress: number) => 100 - 100 * progress;

export const PlayIcon: FC<Props> = ({
  primaryColor,
  secondaryColor,
  progress,
}) => (
  <View position="relative" flex={1}>
    <View
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={4}
      justifyContent="center"
      alignItems="center">
      <Icon name="play" size={14} color={secondaryColor} />
    </View>
    <Svg width={size} height={size}>
      {/* Background Circle */}
      <Circle
        stroke={secondaryColor}
        fill={secondaryColor}
        fillOpacity={0.5}
        strokeOpacity={0}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        {...{ strokeWidth }}
      />

      {/* Progress Circle */}
      <Circle
        stroke={primaryColor}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${circum} ${circum}`}
        strokeDashoffset={
          (radius * Math.PI * 2 * getSvgProgress(progress)) / 100
        }
        strokeLinecap="round"
        transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        {...{ strokeWidth }}
      />
    </Svg>
  </View>
);
