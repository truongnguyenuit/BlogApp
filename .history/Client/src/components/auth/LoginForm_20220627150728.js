import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
// import { AuthContext } from '../../contexts/AuthContext'
// import AlertMessage from '../layout/AlertMessage' 
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
    </div>
  )
}

export default LoginForm