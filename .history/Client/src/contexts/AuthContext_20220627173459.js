import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from 'axios'

export const AuthContext = createContext()

const AuthContextProvider = ( {children} ) => {
  const [auth]
}