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
    <>
      <Form className="my-4" >
      {/* <AlertMessage info={alert}/> */}
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username'
            required
            value={username}
            onChange
          />

          
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='password'
            placeholder='password'
            name='password'
            required
            value={password}
            onChange
          />
        </Form.Group>
        <Button></Button>
      </Form>
    </>
  )
}

export default LoginForm