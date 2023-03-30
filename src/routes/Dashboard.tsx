import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Dashboard = () => {
    const {user} = useAuth()

    if(user.token == null){
        return(<Navigate to='login'/> )
    }
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard