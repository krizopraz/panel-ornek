import React from 'react'

import {  Navigate, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Login = () => {
    const { user , login } = useAuth()
    const navigate = useNavigate()
    const handleLogin = () => {
        login().then(() => {
            navigate('/')
        })
    }

    if(user.token != null){
        return(<Navigate to='/'/> )
    }
    return (
        <form onSubmit={(e)=>{e.preventDefault();handleLogin()}}>
            <div className="username-area">
                <label htmlFor="username">Kullanıcı Adı</label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="password-area">
                <label htmlFor="password">Şifre</label>
                <input type="password" name="password" id="password" />
            </div>
            <div className="submit-area">
                <button>Gİriş Yap</button>
            </div>
        </form>
    )
}

export default Login