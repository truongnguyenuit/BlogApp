import React from 'react'
import LoginForm from '../auth/LoginForm'
const Auth = ({ authRoute }) => {
  return (
    <>
    Learn it
    {authRoute === 'login' && <LoginForm />}
    </>
  )
}

export default Auth