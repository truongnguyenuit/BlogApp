import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from 'axios'

export const AuthContext = createContext()

const AuthContextProvider = ( {children} ) => {
  const [authState, dispatch] = useReducer(authReducer, {
      authLoading: true,
      isAuthenticated: false,
      user: null
    })

    // Login
    const loginUser = async userForm => {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login')
        if()
      }catch (error) {

      }

    }
}