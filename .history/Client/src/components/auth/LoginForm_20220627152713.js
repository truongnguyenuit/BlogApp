import { useState, useContext } from 'react'
// import { AuthContext } from '../../contexts/AuthContext'
// import AlertMessage from '../layout/AlertMessage' 
import './LoginForm.css'
const LoginForm = () => {
  //Context
  //const { loginUser } = useContext('')

  //Local State
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const [alert, setAlert] = useState(null)

  const { username, password } = loginForm

  // const onChangeLoginForm = event => 
  // setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
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
        <span className="bottomtext">Don't have account?</span>
        <button className="register">Register</button>
      </div>
    </div>
  )
}

export default LoginForm