import React from 'react'
import {
  StackNavigationEventMap,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { Login, Register } from '../screens'
import {
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/native'

export const createModuleNavigator = ({
  ...Stack
}: TypedNavigator<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  StackNavigationOptions,
  StackNavigationEventMap,
  () => React.JSX.Element
>) => {
  return (
    <>
      <Stack.Screen name="ECOModuleLogin" component={Login} />
      <Stack.Screen name="ECOModuleRegister" component={Register} />
    </>
  )
}
