import React, { useEffect } from 'react'
import connectRedux from '../../redux/connectRedux'
import DataList from './components/DataList'
import PostCard from './components/PostCard'

const Posts = ({ post, getPosts }) => {
  const { posts } = post

  useEffect(() => { getPosts() }, [])

  const renderItem = (post, index) => <PostCard key={`postcard-${index}`} data={post} />

  return (
    <div>
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