/* eslint-disable react-hooks/rules-of-hooks */
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useEcoProvider } from './useEcoProvider';
import { Login, Register } from '../screens';

const Stack = createStackNavigator();

export const createNavigationTree = (Children: () => React.JSX.Element) => {
  const provider = useEcoProvider();

  return (
    <NavigationContainer
      ref={provider?.navigationRef ?? useNavigationContainerRef()}
      onReady={provider?.onReady}
    >
      <Stack.Navigator>
        <Stack.Screen name="ECORegister" component={Register} />
        <Stack.Screen name="ECOLogin" component={Login} />
        <Stack.Screen name="AppExtendedScreen" component={Children} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
