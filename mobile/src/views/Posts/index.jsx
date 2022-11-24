import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import getPosts from './helpers/getPosts'

const Posts = () => {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    const handleGetPosts = async () => {
      try {
        const posts = await getPosts()
        setPosts(posts)
      } catch (error) {
        console.log(error)
      }
    }
    handleGetPosts()
  }, [])

  return (
    <View>
      {
        posts &&
        posts.map(
          post => <Text>{post.header}</Text>
        )
      }
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({})