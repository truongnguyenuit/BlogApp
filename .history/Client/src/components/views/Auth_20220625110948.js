import React from 'react'
import LoginForm from '../auth/LoginForm'
const Auth = ({ authRoute }) => {
  return (
    <>
    <div>asdtrtr</div>
    {authRoute === 'login' && <LoginForm />}
    {authRoute === 'register'}
    </>
  )
}

export default Auth