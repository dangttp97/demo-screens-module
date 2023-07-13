import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '../../hooks'
import { AppScreens } from '../../declar'

export const Register = () => {
  const navigation = useNavigation<AppScreens>()

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>REGISTER</Text>
      <Button
        title="Return to App"
        disabled={false}
        onPress={() => {
          console.log('Register pressed')
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
    backgroundColor: 'red',
  },
})
