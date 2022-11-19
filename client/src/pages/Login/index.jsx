import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import connectRedux from '../../redux/connectRedux'

const Login = ({ login, auth }) => {
  const [user, setUser] = useState()
  const navigate = useNavigate()

  const handleChangeForm = ({ target }) => {
    const { name, value } = target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitForm = async event => {
    event.preventDefault()
    login(user)
  }

  useEffect(() => {
    auth.user && navigate('/')
  }, [auth])

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type='email' name='email' value={user?.email || ''} onChange={handleChangeForm} className='form-control' />
        <input type='password' name='password' value={user?.password || ''} onChange={handleChangeForm} className='form-control' />
        <button className='btn btn-outline-primary'>enviar</button>
      </form>
    </div>
  )
}
export default connectRedux(Login)
