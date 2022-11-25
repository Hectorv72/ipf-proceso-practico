import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
// import { REACT_APP_BACKEND_URL } from '@env'
import { Input } from '@rneui/themed'
import { Button } from '@rneui/base'
import sendLogin from './helpers/sendLogin'
import TokenContext from '../contexts/TokenContext'

const Login = ({ navigation }) => {
  const [form, setForm] = useState()
  const [error, setError] = useState()
  const { setToken } = useContext(TokenContext)

  const handleSetForm = (target, name) => setForm(prev => ({ ...prev, [name]: target.text }))

  const handleRemoveError = name => {
    const prevErrors = error
    delete prevErrors[name]
    setError(prevErrors)
  }

  const handleLogin = async () => {
    try {
      const { success, error } = await sendLogin(form)
      if (success) {
        setToken(success.token)
        navigation.navigate('posts')
      }
      error && setError(error)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Input
        placeholder='email'
        onChange={({ nativeEvent: target }) => handleSetForm(target, 'email')}
        errorMessage={error?.email || ''}
        renderErrorMessage={error?.email}
        onTouchEnd={() => error?.email && handleRemoveError('email')}
      />
      <Input
        placeholder='password'
        secureTextEntry
        onChange={({ nativeEvent: target }) => handleSetForm(target, 'password')}
        errorMessage={error?.password || ''}
        renderErrorMessage={error?.password}
        onTouchEnd={() => error?.email && handleRemoveError('password')}
      />
      <Button onPress={handleLogin} >Login</Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})