import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from 'axios'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null
  })

  // Login
  const loginUser = async userForm => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`)
      if (response.data.success)
        localStorage.setItem('LocalStorageTokenName', response.data.accessToken)
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
      if(response.data.success)
        localStorage.setItem('LocalStorageTokenName',response.data.accessToken)
      await loadUser()

      return response.data
    } catch (error) {
      if(error.response.data)
    }
  }

  // Context data
  const authContextData = {loginUser}

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider