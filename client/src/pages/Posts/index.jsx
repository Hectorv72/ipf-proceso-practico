import React, { useEffect } from 'react'
import connectRedux from '../../redux/connectRedux'
import DataList from './components/DataList'
import PostCard from './components/PostCard'
import WritePost from './components/WritePost'

const Posts = ({ post, getPosts, setAppPage }) => {
  const { posts } = post

  useEffect(() => {
    getPosts()
    setAppPage('posts')
  }, [])

  const renderItem = (post, index) => <PostCard key={`postcard-${index}`} data={post} />

  return (
    <div>
      <WritePost />
      <DataList items={posts} renderItem={renderItem} />
      {/* {
        posts.map(
          (post, index) => <PostCard key={`postcard-${index}`} data={post} />
        )
      } */}
    </div>
  )
}

export default connectRedux(Posts)