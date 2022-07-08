import { Route, Navigate } from 'react-router-dom'
import { Component, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


const ProtectedRoute = ({ protect, children }) => {
  const { authState : { authLoading, isAuthenticated} } = useContext(AuthContext)

  // if (authLoading)
  //   return (
      
  //   )
  if ( !)

  return children;
}

export default ProtectedRoute