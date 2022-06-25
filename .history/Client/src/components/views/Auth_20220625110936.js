import React from 'react'
import LoginForm from '../auth/LoginForm'
const Auth = ({ authRoute }) => {
  return (
    <>
    <div>asdtrtr</div>
    {authRoute === 'login' && <LoginForm />}
    {}
    </>
  )
}

export default Auth