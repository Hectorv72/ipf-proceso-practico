import React, { useEffect } from 'react'
import connectRedux from '../redux/connectRedux'
const AuthUser = ({ authUser, auth }) => {
  const { token, user } = auth
  useEffect(() => {
    token && !user && authUser()
  }, [])

  // return (<></>)
}

export default connectRedux(AuthUser)