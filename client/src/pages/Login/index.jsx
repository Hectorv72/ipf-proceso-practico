import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/auth'

const Login = ({ register, ...props }) => {
  const [user, setUser] = useState()

  const handleChangeForm = ({ target }) => {
    const { name, value } = target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    console.log(props)
    login(user)
  }

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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)