import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
// import AlertMessage from '../layout/AlertMessage' 
import { Link } from 'react-router-dom'
import './LoginForm.css'
const LoginForm = () => {
  //Context
  const { loginUser } = useContext(AuthContext)

  //Local State
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const [alert, setAlert] = useState(null)

  const { username, password } = loginForm

  const onChangeLoginForm = event =>
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    })
  const login = async event => {

    try {
      const loginData = await loginUser(loginForm)
      if 
    }
  }
  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder='Your user name'
          name="username"
          value={username}
          onChange={onChangeLoginForm}
        />
        <input
          type="text"
          placeholder='Your password'
          name="password"
          value={password}
          onChange={onChangeLoginForm}
        />
        <button className="Login">
          Login
        </button>
      </div>
      <div className="bottom">
        <span className="bottomtext">Don't have account?</span>
        <Link to='/register'>
          <button className="register">Register</button>
        </Link>
      </div>
    </div>
  )
}

export default LoginForm