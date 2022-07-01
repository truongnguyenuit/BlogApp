import React, { useState } from 'react'

const RegisterForm = () => {

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const { username, password, test3 } = registerForm

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
          value={test1}
          onChange={onChangeRegisterForm}
          
        />
        <input
          type="text"
          placeholder='Your password'
          name='password'
          value={test2}
          onChange={onChangeRegisterForm}
        />
        <input
          type="text"
          placeholder='Confirm password'
          name='confirmPassword'
          value={test3}
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