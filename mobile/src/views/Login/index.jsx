import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// import { REACT_APP_BACKEND_URL } from '@env'
import { Input } from '@rneui/themed'
import { Button } from '@rneui/base'
import sendLogin from './helpers/sendLogin'

const Login = ({ navigation }) => {
  const [form, setForm] = useState()
  const [error, setError] = useState()

  const handleSetForm = (target, name) => setForm(prev => ({ ...prev, [name]: target.text }))

  const handleLogin = async () => {
    try {
      const { success, error } = await sendLogin(form)
      success && navigation.navigate('posts')
      error && setError(error)
      // response.ok && navigation.navigate('posts')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Input placeholder='email' onChange={({ nativeEvent: target }) => handleSetForm(target, 'email')} renderErrorMessage={error.password} />
      <Input placeholder='password' secureTextEntry onChange={({ nativeEvent: target }) => handleSetForm(target, 'password')} />
      <Button onPress={handleLogin} >Login</Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})