/*
 * @Author: phankiet.it@gmail.com
 * @Date: 2022-05-25 01:18:14
 * @Last Modified by: phankiet.it@gmail.com
 * @Last Modified time: 2022-05-31 14:54:20
 */
import { View } from 'react-native';
import React from 'react';

interface ISizeBox {
  width?: number;
  height?: number;
}

const SizeBox = (props: ISizeBox) => {
  return <View style={{ width: props.width, height: props.height }} />;
};

export default SizeBox;
