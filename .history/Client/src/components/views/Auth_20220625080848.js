import React from 'react'
import LoginForm from '../auth/LoginForm'
const Auth = ({ authRoute }) => {
  return (
    <>
    {authRoute === 'login' && <LoginForm />}
    </>
  )
}

export default Auth