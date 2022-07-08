import { Route } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


const ProtectedRoute = ({ component: Component})