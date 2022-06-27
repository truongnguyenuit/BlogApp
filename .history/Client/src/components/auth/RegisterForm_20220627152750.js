import React from 'react'

const RegisterForm = () => {
  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          className="userName"
          placeholder='Your user name'
        />
        <input
          type="text"
          className="passWord"
          placeholder='Your password'
        />
        <button className="Login">
          Login
        </button>
      </div>
      <div className="bottom">
        <span className="bottomtext">Already have an account?</span>
        <button className="register">Register</button>
      </div>
    </div>
  )
}

export default RegisterForm