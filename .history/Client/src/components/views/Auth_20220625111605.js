import React from 'react'
import LoginForm from '../auth/LoginForm'
import RegisterForm from '../auth/RegisterForm'
const Auth = ({ authRoute }) => {
  return (
    <>
    <div></div>
    {authRoute === 'login' && <LoginForm />}
    {authRoute === 'register' && <RegisterForm />}
    </>
  )
}

export default Auth