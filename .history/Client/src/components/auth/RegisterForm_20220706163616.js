import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Navigate } from "react-router-dom";
const RegisterForm = () => {
  // Context
  const { registerUser } = useContext(AuthContext)

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
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const registerData = await registerUser(registerForm)

      if (!registerData.success) {
        alert(registerData.message)
      }
      else {
        alert(registerData.message)
      }

    } catch (error) {
      console.log(error)
    }

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
        <link rel="stylesheet" href="" >
        <button
          className="register"
          onClick={<Navigate to="/login" replace />}
        >
          Login
        </button>
        </link
      </div>
    </div>
  )
}

export default RegisterForm