import React from 'react'
import LoginForm from '../auth/LoginForm'
import RegisterForm from '../auth/RegisterForm'
const Auth = ({ authRoute }) => {
  let body 
  
  body = (
    <>
      <div>this is auth form</div>
      {authRoute === 'login' && <LoginForm />}
      {authRoute === 'register' && <RegisterForm />}
    </>
  )
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Learn It</h1>
          <h4>Keep track of what you are learning</h4>
          
        </div>
      </div>
    </div>
  )
}

export default Auth