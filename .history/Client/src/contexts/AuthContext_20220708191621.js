import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import setAuthToken from "../untils/setAuthToken";
import axios from 'axios'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null
  })

  useEffect(() => {
    
    loadUser()
  }, [])



  //Authentication
  const loadUser = async () => {
    console.log('2',authState.isAuthenticated)
    if (localStorage['LocalStorageTokenName']) {
      setAuthToken(localStorage['LocalStorageTokenName'])
    }
    console.log('3',authState.isAuthenticated)
    try {
      const response = await axios.get(`http://localhost:5000/api/auth`)
      if (response.data.success) {
        dispatch({
          type: 'SET_AUTH',
          payload: { isAuthenticated: true, user: response.data.user }
        })
        console.log('4',authState.isAuthenticated)
      }
      console.log('5',authState.isAuthenticated)
    } catch (error) {
      localStorage.removeItem('LocalStorageTokenName')
      setAuthToken(null)
      dispatch({
        type: 'SET_AUTH',
        payload: { isAuthenticated: false, user: null }
      })
    }
  }

  

  // Login
  const loginUser = async userForm => {
    try {

      const response = await axios.post(`http://localhost:5000/api/auth/login`, userForm)
      if (response.data.success)
        localStorage.setItem('LocalStorageTokenName', response.data.accessToken)


      await loadUser()
      return response.data

    } catch (error) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Register
  const registerUser = async userForm => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/register`, userForm)
      if (response.data.success)
        localStorage.setItem('LocalStorageTokenName', response.data.accessToken)
      // await loadUser()

      return response.data

    } catch (error) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Context data
  const authContextData = { loginUser, registerUser, authState }

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider