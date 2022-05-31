/*
 * @Author: phankiet.it@gmail.com
 * @Date: 2022-05-25 01:17:38
 * @Last Modified by: phankiet.it@gmail.com
 * @Last Modified time: 2022-05-31 15:12:41
 */
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import NormalText from '../text/NormalText';
import { colors } from '@src/configs/constants/color';
import { font, scale } from '@src/utils/scale';
import { fontFamily } from '@src/configs/constants/font';

interface IButton extends Partial<PressableProps> {
  label: string;
  backgroundColor: colors;
  labelStyle?: ViewStyle;
  labelColor: colors;
  paddingHorizontal: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button = (props: IButton) => {
  return (
    <Pressable
      {...props}
      style={[
        props.style,
        styles.container,
        {
          backgroundColor: props.backgroundColor,
          paddingHorizontal: props.paddingHorizontal,
        },
      ]}>
      {props.children ?? (
        <NormalText
          textAlign="center"
          fontSize={font(18)}
          fontFamily={fontFamily.montserratMedium}
          color={props.labelColor}
          style={props.labelStyle}>
          {props.label}
        </NormalText>
      )}
    </Pressable>
  );
};

Button.defaultProps = {
  backgroundColor: colors.blue100,
  labelColor: colors.white100,
  paddingHorizontal: scale(24),
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    borderRadius: scale(24),
    justifyContent: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
