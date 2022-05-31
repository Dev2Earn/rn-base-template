import { Platform, Text, TextProps } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import { fontFamily } from '@src/configs/constants/font';
import { verticalScale } from '@src/utils/scale';

interface INormalText extends TextProps {
  fontFamily: fontFamily;
  fontSize: number;
  color: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  lineHeight: number;
  flex?: number;
}

const NormalText = (props: INormalText) => {
  return (
    <Text
      adjustsFontSizeToFit
      minimumFontScale={Platform.OS === 'android' ? 0.8 : undefined}
      {...props}
      style={[
        props.style,
        {
          fontFamily: props.fontFamily,
          fontSize: props.fontSize,
          color: props.color,
          textAlign: props.textAlign,
          lineHeight: props.lineHeight,
        },
      ]}
    />
  );
};

NormalText.defaultProps = {
  fontFamily: fontFamily.montserratRegular,
  fontSize: scale(14),
  textAlign: 'left',
  lineHeight: verticalScale(22),
};

export default NormalText;
