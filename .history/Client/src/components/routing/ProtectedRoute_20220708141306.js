import { Route, Navigate } from 'react-router-dom'
import { Component, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import 

const ProtectedRoute = ({ protect }) => {
  const { authState : { authLoading, isAuthenticated} } = useContext(AuthContext)

  // if (authLoading)
  //   return (
      
  //   )
  return ;
}

export default ProtectedRoute