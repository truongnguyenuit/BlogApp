import React from 'react'

const Auth = ({ authRoute }) => {
  return (
    {
      authRoute === 'login' && <Login
    }
  )
}

export default Auth