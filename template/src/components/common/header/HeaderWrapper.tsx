/*
 * @Author: phankiet.it@gmail.com
 * @Date: 2022-05-25 01:17:49
 * @Last Modified by: phankiet.it@gmail.com
 * @Last Modified time: 2022-05-31 15:07:58
 */
import { StyleSheet, View, ViewProps } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale } from '@/utils/scale';
import { colors } from '@/configs/constants/color';

type IHeaderWrapper = ViewProps

const HeaderWrapper = (props: IHeaderWrapper) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[props.style, styles.container, { paddingTop: top + scale(12) }]}>
      {props.children}
    </View>
  );
};

export default HeaderWrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue100,
    paddingHorizontal: scale(16),
    paddingBottom: scale(12),
  },
});
