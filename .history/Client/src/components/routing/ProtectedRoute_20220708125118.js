import { Route } from 'react-router-dom'
import { Component, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


const ProtectedRoute = ({ component }) => {
  const { authState : { authLoading, isAuthenticated} } = useContext(AuthContext)

  // if (authLoading)
  //   return (
      
  //   )
  return (
    <Route render=(props)
  )
}

export default ProtectedRoute