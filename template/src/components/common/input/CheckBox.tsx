/*
 * @Author: phankiet.it@gmail.com
 * @Date: 2022-05-25 01:17:52
 * @Last Modified by: phankiet.it@gmail.com
 * @Last Modified time: 2022-05-31 15:00:52
 */
import { LayoutAnimation, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import debounce from 'lodash/debounce';
import NormalText from '../text/NormalText';
import { scale, verticalScale } from '@src/utils/scale';
import { colors } from '@src/configs/constants/color';
import { CheckedIc, UncheckIc } from '@src/components/common/icon';

interface ICheckBox {
  defaultValue?: boolean;
  label: string;
  onToggle: (value: boolean) => void;
}

const CheckBox = (props: ICheckBox) => {
  const [value, setValue] = useState<boolean>(props.defaultValue ?? false);

  const _toggleValue = () => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.spring,
      duration: 100,
    });
    setValue(prev => {
      props.onToggle?.(!prev);
      return !prev;
    });
  };

  const toggleValue = debounce(_toggleValue, 300);

  return (
    <Pressable style={styles.container} onPress={() => toggleValue()}>
      {value ? (
        <CheckedIc
          height={verticalScale(20)}
          width={scale(20)}
          color={colors.blue100}
        />
      ) : (
        <UncheckIc
          height={verticalScale(20)}
          width={scale(20)}
          color={colors.blue100}
        />
      )}
      <NormalText style={styles.label} color={colors.blue100}>
        {props.label ?? ''}
      </NormalText>
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  label: {
    marginLeft: scale(8),
  },
});
