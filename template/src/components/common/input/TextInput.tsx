/*
 * @Author: phankiet.it@gmail.com
 * @Date: 2022-05-25 01:17:58
 * @Last Modified by: phankiet.it@gmail.com
 * @Last Modified time: 2022-05-31 15:07:42
 */
import {
  Pressable,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { fontFamily } from '@src/configs/constants/font';
import { font, scale } from '@src/utils/scale';
import { colors } from '@src/configs/constants/color';
import { EyeCloseIc, EyeIc } from '@src/components/common/icon';

const TEXT_INPUT_MAX_LEN = 255;

interface ITextInput extends TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
}

const TextInput = (props: ITextInput) => {
  const ref = useRef(null);

  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(props.autoFocus ?? false);
  const [showPass, setShowPass] = useState<boolean>(!props.secureTextEntry);
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: focused ? colors.blue100 : colors.blue27,
        },
      ]}>
      <RNTextInput
        {...props}
        value={value}
        ref={ref}
        maxLength={TEXT_INPUT_MAX_LEN}
        style={[
          styles.input,
          {
            fontFamily: value.isNotEmpty()
              ? fontFamily.montserratMedium
              : fontFamily.montserratRegular,
            fontSize: font(16),
          },
        ]}
        placeholder={props.placeholder}
        placeholderTextColor={colors.blue50}
        onChangeText={text => {
          props.onChangeText?.(text);
          setValue(text);
        }}
        onFocus={e => {
          props.onFocus?.(e);
          setFocused(true);
        }}
        onBlur={e => {
          props.onBlur?.(e);
          setFocused(false);
        }}
        secureTextEntry={!showPass}
      />
      {props.secureTextEntry ? (
        showPass ? (
          <Pressable onPress={() => setShowPass(false)} style={styles.icon}>
            <EyeIc
              color={focused ? colors.blue100 : colors.blue27}
              height={scale(22)}
              width={scale(22)}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => setShowPass(true)} style={styles.icon}>
            <EyeCloseIc
              style={styles.icon}
              color={focused ? colors.blue100 : colors.blue27}
              height={scale(22)}
              width={scale(22)}
            />
          </Pressable>
        )
      ) : null}
    </View>
  );
};

TextInput.defaultProps = {
  secureTextEntry: false,
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: scale(54),
    borderRadius: scale(8),
    borderWidth: 1,
    paddingHorizontal: scale(16),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: font(16),
    color: colors.blue100,
  },
  icon: {
    paddingLeft: scale(8),
  },
});
