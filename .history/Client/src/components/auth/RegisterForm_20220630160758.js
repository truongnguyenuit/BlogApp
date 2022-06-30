import React, { useState } from 'react'

const RegisterForm = () => {

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const { username, password, confirmPassword } = registerForm
  const onChangeRegisterForm

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          className="userName"
          placeholder='Your user name'
          value={username}

        />
        <input
          type="text"
          className="passWord"
          placeholder='Your password'
          value= {password}
        />
        <input
          type="text"
          className="passWord"
          placeholder='Confirm password'
          value={confirmPassword}
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