import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './src/screens'
import { createModuleNavigator } from '@dangttp/demo-screens-module'
import { AppScreenType } from 'src/ScreenType'

const Stack = createStackNavigator()
const Component = createModuleNavigator(Stack)

const App = () => {
  const navigationRef = useNavigationContainerRef<AppScreenType>()

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {Component}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
// })
