import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import getPosts from './helpers/getPosts'
import CardPost from './layouts/CardPost'
import WritePost from './components/WritePost'
import ModalPost from './components/ModalPost'
import PostContext from './contexts/PostContext'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleAddPost = (post) => {
    setPosts(prev => [post, ...prev])
  }
  const handleShowModal = () => setShowModal(true)
  const handleHideModal = () => setShowModal(false)

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
    <PostContext.Provider value={{ posts, handleAddPost, handleHideModal }}>
      <View style={styles.container}>
        <ModalPost show={showModal} onCloseButton={handleHideModal} />
        <View><WritePost onTouchCard={handleShowModal} /></View>
        {
          posts.length > 0
            ? <ScrollView>
              {
                posts &&
                posts.map(
                  (post, index) => <CardPost key={'post-' + index}
                    header={post.header}
                    message={post.message}
                    username={post.sender.username}
                  />
                )
              }
            </ScrollView>
            : <View>
              <Text>No hay posts</Text>
            </View>
        }

      </View>
    </PostContext.Provider>
  )
}

export default Posts

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})