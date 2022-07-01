import React, { useState } from 'react'

const RegisterForm = () => {

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const { username, password, confirmPassword } = registerForm

  const onChangeRegisterForm = event => {
    console.log(event.target.value)
    console.log(event.target.name)
    console.log(registerForm)
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value
    })
  }

  const register = async event => {
   
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
        />
        <input
          type="text"
          placeholder='Your password'
          name='password'
          value={password}
          onChange={onChangeRegisterForm}
        />
        <input
          type="text"
          placeholder='Confirm password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onChangeRegisterForm}
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