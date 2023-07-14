import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useRoute } from '../../hooks'

export const Login = () => {
  const navigation = useNavigation()
  const route = useRoute<'ECOModuleLogin'>()
  const { username, password } = route.params

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>LOGIN</Text>
      <Text style={{ color: 'black' }}>Username: {username}</Text>
      <Text style={{ color: 'black' }}>Password: {password}</Text>
      <Button
        title="Go To Register"
        onPress={() => {
          console.log('Pressed')
          navigation.navigate('ECOModuleRegister', {
            username: 'ABC',
            fullName: 'DEF',
          })
        }}
      />
      <Button
        title="Go Back"
        disabled={false}
        onPress={() => {
          navigation.goBack()
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
