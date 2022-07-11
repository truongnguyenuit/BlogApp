import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
// import AlertMessage from '../layout/AlertMessage' 
import { Link } from 'react-router-dom'

const LoginForm = () => {
  //Context
  const { loginUser } = useContext(AuthContext)

  //Local State
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const { username, password } = loginForm

  const onChangeLoginForm = event =>
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    })
  const login = async event => {
    event.preventDefault()
    try {

      const loginData = await loginUser(loginForm)
      console.log(loginData)
      alert(loginData.message)
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <input
          type="text"
          placeholder='Your user name'
          name="username"
          value={username}
          onChange={onChangeLoginForm}
        />
        <input
          type="password"
          placeholder='Your password'
          name="password"
          value={password}
          onChange={onChangeLoginForm}
        />
        <button className="Login" onClick={login}>
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