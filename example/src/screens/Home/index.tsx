import { AppScreenType } from '../../ScreenType'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from 'react-native-demo_screen'

export const Home = () => {
  const navigation = useNavigation<AppScreenType>()

  return (
    <View style={{ flex: 1 }}>
      <Text>HOME</Text>
      <Button
        title="Navigate Login"
        onPress={() => navigation.navigate('ECOLogin')}
      />
      <Button
        title="Navigate Register"
        onPress={() => navigation.navigate('ECORegister')}
      />
    </View>
  )
}
