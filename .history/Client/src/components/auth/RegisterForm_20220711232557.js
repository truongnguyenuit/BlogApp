import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from "react-router-dom";
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
      console.log(registerData)
      alert(registerData.message)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="flex flex-col p-2 gap-2">
      <div className="flex flex-col gap-1.5 justify-items-center">
        <input
          className='rounded p-1.5 text-black'
          type="text"
          placeholder='Your user name'
          name='username'
          value={username}
          onChange={onChangeRegisterForm}
          required
        />
        <input
          className='rounded p-1.5 text-black'
          type="password"
          placeholder='Your password'
          name='password'
          value={password}
          onChange={onChangeRegisterForm}
          required
        />
        <input
          className='rounded p-1.5 text-black'
          type="password"
          placeholder='Confirm password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onChangeRegisterForm}
          required
        />
        <button
          className="bg-sky-500 rounded p-1 w-20 self-center"
          onClick={register}
        >
          Register
        </button>
      </div>
      <div className="bottom">
        <span className="bottomtext">Already have an account?</span>
        <Link to='/login'>
          <button
            bg-sky-500 rounded p-1 w-20
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RegisterForm