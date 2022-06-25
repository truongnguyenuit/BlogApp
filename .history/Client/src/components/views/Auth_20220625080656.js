import React from 'react'
import 
const Auth = ({ authRoute }) => {
  return (
    {
      authRoute === 'login' && <LoginForm />
    }
  )
}

export default Auth