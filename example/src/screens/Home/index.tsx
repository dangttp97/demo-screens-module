import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@dangttp/demo-screens-module'

export const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Text>HOME</Text>
      <Button
        title="Navigate Login"
        onPress={() =>
          navigation.navigate('ECOModuleLogin', {
            username: 'ewrJKA',
            password: 'werwoier',
          })
        }
      />
      <Button
        title="Navigate Register"
        onPress={() =>
          navigation.navigate('ECOModuleRegister', {
            username: 'ewrJKA',
            fullName: 'Phuong Dang',
          })
        }
      />
    </View>
  )
}
