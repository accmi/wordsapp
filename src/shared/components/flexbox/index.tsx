import React, { FC, memo, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import {
  StyleProp,
  TextStyle,
  Text as RNText,
  StyleSheet,
  View as RNView,
} from 'react-native';

export interface TextProps extends TextStyle {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export interface ViewProps extends ViewStyle {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const TextComponent: FC<TextProps> = ({ style, children, ...styles }) => {
  return <RNText style={StyleSheet.compose(style, styles)}>{children}</RNText>;
};
const ViewComponent: FC<TextProps> = ({ style, children, ...styles }) => {
  return <RNView style={StyleSheet.compose(style, styles)}>{children}</RNView>;
};

export const Text = memo(TextComponent);
export const View = memo(ViewComponent);
