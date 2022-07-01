import React, { useState } from 'react'

const RegisterForm = () => {

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })

  let { username, password, confirmPassword } = registerForm
  const [test, settest]  = useState('')
  const onChangeRegisterForm = event => 
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value
    })
  

  const register = async => {
    console.log(registerForm)
  }


  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder='Your user name'
          name= 'username'
          value={username}
          onChange={onChangeRegisterForm}
          
        />
        <input
          type="text"
          placeholder='Your password'
          onChange={onChangeRegisterForm}
        />
        <input
          type="text"
          className="passWord"
          placeholder='Confirm password'
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