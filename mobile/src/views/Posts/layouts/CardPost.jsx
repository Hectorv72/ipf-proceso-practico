import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/base'

const profileImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'

const CardPost = ({ header, message, username }) => {
  return (
    <Card>
      <Card.Title>{header}</Card.Title>
      <View>
        <Text>{message}</Text>
        <View style={styles.profileContainer}>
          <Image source={{ uri: profileImg }} style={styles.image} />
          <Text style={styles.sendername}>{username || ''}</Text>
        </View>
      </View>
    </Card>
  )
}

export default CardPost

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 100,
  }
})