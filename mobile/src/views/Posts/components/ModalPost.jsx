import { Modal, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useContext, useState } from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { Button, Input } from '@rneui/base'
import sendPost from '../helpers/sendPost'
import TokenContext from '../../contexts/TokenContext'
import PostContext from '../contexts/PostContext'

const ModalPost = ({ show, onCloseButton }) => {
  const { token } = useContext(TokenContext)
  const { handleAddPost, handleHideModal } = useContext(PostContext)
  const [form, setForm] = useState({
    header: '',
    message: '',
    type: 'aviso'
  })
  const [error, setError] = useState()

  const handleSetForm = (value, name) => setForm(prev => ({ ...prev, [name]: value }))

  const handleRemoveError = name => {
    const prevErrors = error
    delete prevErrors[name]
    setError(prevErrors)
  }

  const handleSendPost = async () => {
    try {
      const { success, error } = await sendPost(form, token)

      if (success) {
        handleAddPost(success.post)
        handleHideModal()
      }
      error && setError(error)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal visible={show} animationType='slide'>
      <TouchableWithoutFeedback onPress={onCloseButton} >
        <Text><EvilIcons name="close" size={32} color="black" /></Text>
      </TouchableWithoutFeedback>
      <Input placeholder='cabecera'
        onChangeText={value => handleSetForm(value, 'header')}
        errorMessage={error?.header || ''}
        renderErrorMessage={error?.header}
        onTouchEnd={() => error?.header && handleRemoveError('header')}
      />
      <Input placeholder='mensaje'
        onChangeText={value => handleSetForm(value, 'message')}
        errorMessage={error?.message || ''}
        renderErrorMessage={error?.message}
        onTouchEnd={() => error?.message && handleRemoveError('message')}
      />
      <Button onPress={handleSendPost}>Enviar</Button>
    </Modal>
  )
}

export default ModalPost

const styles = StyleSheet.create({})