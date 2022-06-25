import React from 'react'

const Auth = ({ authRoute }) => {
  return (
    {
      authRoute === 'login' && <LoginForm
    }
  )
}

export default Auth