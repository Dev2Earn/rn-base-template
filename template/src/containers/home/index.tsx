import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import { goback } from '@src/navigations/Navigator';
import { useAppSelector } from '@src/store/hooks';

const Home = () => {
  const authenticated = useAppSelector(state => state.authenticated);

  useEffect(() => {
    console.log('authenticated: ', authenticated);
  }, []);

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Home</Text>
      <Button marginT-xs title={'back'} onPress={() => goback()} />
    </View>
  );
};

export default Home;
