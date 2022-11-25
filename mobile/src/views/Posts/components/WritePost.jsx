import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, Card } from '@rneui/base'
const profileImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'


const WritePost = ({ onTouchCard }) => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.entry}>
        <View style={styles.containerEntry} onTouchEnd={onTouchCard}>
          <Image source={{ uri: profileImg }} style={{ width: 30, height: 30 }} />
          <Text style={{ marginLeft: 15 }}>Agregar Post</Text>
        </View>
      </Card>
    </View>
  )
}

export default WritePost

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  entry: {
    margin: 5
  },
  containerEntry: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})