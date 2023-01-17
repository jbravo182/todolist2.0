import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginRequest from '../api/loginRequest';
import { TokenContext } from '../App';

export const LoginPage = () => {

    const[password, setPassword] = useState('')
    const[error, setError] =  useState('')
    const[token, setToken] = useContext(TokenContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        loginRequest(password)
            .then(({token}) => {
                setToken(token);
                navigate('/')
            }).catch(err => {
                setError(err.message)
            })
    }

    return (
        <div>
            <h1 className="center">Login</h1>
            <div style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>{error}</div>
            <form onSubmit={handleLogin}>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
            </form>
        </div>
  )
}
