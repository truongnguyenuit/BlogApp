import { Route, Navigate } from 'react-router-dom'
import { Component, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import 

const ProtectedRoute = ({ component }) => {
  const { authState : { authLoading, isAuthenticated} } = useContext(AuthContext)

  // if (authLoading)
  //   return (
      
  //   )
  return (
    <Route render={() => isAuthenticated ? (
      <>
        
      </>
    ) : (
      <Navigate to="/login" replace />
    )}
    
  )
}

export default ProtectedRoute