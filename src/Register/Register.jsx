import React from 'react'
import RegisterLogo from './RegisterLogo'
import RegisterForm from './RegisterForm'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import Loading from '../components/Loading'

const Register = () => {
  const { isAuthenticated, isLogged, isLoading } = useAuth()
  if (isLoading) {
    return <Loading />
  }
  if (isAuthenticated && isLogged) {
    return <Navigate to={'/'} replace />
  }
  return (
    <div className="flex flex-col justify-center items-center px-4 space-y-8 min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-white">Foodpool</h1>
      <div className="flex overflow-hidden flex-row w-full max-w-5xl rounded-2xl shadow">
        <RegisterLogo />
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
