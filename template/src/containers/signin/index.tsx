import React from 'react';
import { View, Button, Text } from 'react-native';

import { navigate } from '@src/navigations/Navigator';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { loginRequest } from '@src/store/authenticated/actions';
import { t } from '@src/locales';
import { appModal } from '@src/modal';
import { ScreenName } from '@src/navigations/model';
import { colors } from '@src/configs/constants/color';
import NormalText from '@src/components/common/text/NormalText';

const Signin = () =>
{
  const authenticated = useAppSelector(state => state.authenticated);
  const dispatch = useAppDispatch();
    
  const handleSignin = () =>
  {
    console.log('authenticated: ', authenticated);
    dispatch(loginRequest({ username: 'abc', password: 'xyz' }));
    navigate(ScreenName.Root);
  };
    
  const handleShowModal = () =>
  {
    appModal.current?.show({
      child: renderAbc(),
      config: {
        onDismiss: () => { console.log('dismiss'); },
        onModalHide: () => console.log('hide ne'),
        backdropColor: '#333'
      }
    });
  };
    
  const renderAbc = () =>
  {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text>
          {'Modal ne'}
        </Text>
      </View>
    );
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* <Button title={t('authenticated.login')} onPress={handleSignin} />
      <Button title={'Show modal'} onPress={handleShowModal} /> */}
      <NormalText color={colors.blue100} >
        {'Test chu ne'}
      </NormalText>
      <NormalText color={colors.blue100} >
        {'Test chu ne'}
      </NormalText>
    </View>
  );
};

export default Signin;
