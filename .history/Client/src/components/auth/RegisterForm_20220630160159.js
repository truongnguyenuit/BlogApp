import React from 'react'

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = use
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
        <input
          type="text"
          className="passWord"
          placeholder='Confirm password'
        />
        <button className="Register">
          Register
        </button>
      </div>
      <div className="bottom">
        <span className="bottomtext">Already have an account?</span>
        <button className="register">Login</button>
      </div>
    </div>
  )
}

export default RegisterForm