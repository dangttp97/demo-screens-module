import { useNavigationContainerRef } from '@react-navigation/native'
import * as React from 'react'

import { ECOProvider, createNavigationTree } from 'react-native-demo_screen'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './src/screens'

const Stack = createStackNavigator()

const AppRootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const App = () => {
  const navigationRef = useNavigationContainerRef()

  return (
    <ECOProvider
      navigationRef={navigationRef}
      onReady={() => {
        console.log('App is ready')
      }}
    >
      {createNavigationTree(AppRootNavigator)}
    </ECOProvider>
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
