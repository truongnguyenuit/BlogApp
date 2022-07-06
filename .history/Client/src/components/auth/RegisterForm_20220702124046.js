import React, { useState } from 'react'

const RegisterForm = () => {

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const { username, password, confirmPassword } = registerForm

  const onChangeRegisterForm = event => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value
    })
  }

  const register = async event => {
    if (password !== confirmPassword)
   
  }

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder='Your user name'
          name='username'
          value={username}
          onChange={onChangeRegisterForm}
          required
        />
        <input
          type="password"
          placeholder='Your password'
          name='password'
          value={password}
          onChange={onChangeRegisterForm}
          required
        />
        <input
          type="password"
          placeholder='Confirm password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onChangeRegisterForm}
          required
        />
        <button
          className="Register"
          onClick={register}
        >
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