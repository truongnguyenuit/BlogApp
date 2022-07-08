import { Route, Navigate } from 'react-router-dom'
import { Component, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


const ProtectedRoute = ({ protect, children }) => {
  console.log("login false")
  const { authState : { authLoading, isAuthenticated} } = useContext(AuthContext)
  // if (authLoading)
  //   return (
      
  //   )
  if ( protect && !isAuthenticated ) {
    
    return <Navigate to="/login" replace />
  }
  return children;
}

export default ProtectedRoute