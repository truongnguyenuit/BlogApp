import { Route } from 'react-router-dom'
import { Component, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authState : { authLoading, isAuthenticated}}
}