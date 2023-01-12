import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {

    const navigate = useNavigate()

    const [isLogged, setIsLogged] = useState(false)

    const {handleSubmit, register, reset} = useForm()

    const submit = data => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
                navigate('/')
            })
            .catch(err => console.log(err))
            reset({
                email: "",
                password: ""
            })
    }

    useEffect(() => {
        const condition = localStorage.getItem('token') ? true : false
        setIsLogged(condition)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    if(isLogged) {
        return (
            <div className='div-login'>
            <h1>User Logged <span className='span-verify'>✔</span></h1>
            <button onClick={handleLogout}>log out</button>
            </div>
        )
    }

    return (
        <div>
            <form className='form-login' onSubmit={handleSubmit(submit)}>
                <div className='div-email'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id='email' {...register("email")}/>
                </div>
                <div className='div-password'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' {...register("password")}/>
                </div>
                <button>Login</button>
            </form>
            <section className='credentials'>
                <h5 className='cred-email'>Email: javesq10@gmail.com</h5>
                <h5 className='cred-pass'>Password: pass123</h5>
            </section>
        </div>
    )
}

export default Login