import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/themed'
import { Button } from '@rneui/base'

const Login = ({ navigation }) => {
  const [form, setForm] = useState()

  const handleSetForm = (target, name) => setForm(prev => ({ ...prev, [name]: target.text }))

  const handleLogin = async () => {
    try {
      const url = 'http://192.168.216.180:4000/auth/login'
      console.log(form)
      const content = {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(form)
      }
      const response = await fetch(url, content)
      const json = await response.json()
      response.ok && navigation.navigate('posts')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Input placeholder='elusuario' onChange={({ nativeEvent: target }) => handleSetForm(target, 'email')} />
      <Input placeholder='lapasswuor' secureTextEntry onChange={({ nativeEvent: target }) => handleSetForm(target, 'password')} />
      <Button onPress={handleLogin} >Loguearse papu</Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})