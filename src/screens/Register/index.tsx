import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useRoute } from '../../hooks'

export const Register = () => {
  const navigation = useNavigation()
  const route = useRoute<'ECOModuleRegister'>()

  const { username, fullName } = route.params

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>REGISTER</Text>
      <Text style={{ color: 'black' }}>Username: {username}</Text>
      <Text style={{ color: 'black' }}>Full Name: {fullName}</Text>
      <Button
        title="Go To Login"
        disabled={false}
        onPress={() => {
          navigation.navigate('ECOModuleLogin', {
            username: 'phuongdang012',
            password: 'ABCDEF',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'red',
  },
})
