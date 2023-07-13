import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '../../hooks'
import { AppScreens } from '../../declar'

export const Login = () => {
  const navigation = useNavigation<AppScreens>()

  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
      <Button
        title="Return Home"
        onPress={() => {
          console.log('Pressed')
          navigation.navigate('AppExtendedScreen')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 20,
  },
})
