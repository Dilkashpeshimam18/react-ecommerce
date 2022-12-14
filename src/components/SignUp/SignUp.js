import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../store/cartContext'
import SubSection from '../SubSection/SubSection'
import './SignUp.css'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(CartContext)
    useEffect(() => {
        if (isLoggedIn == true) {
            navigate('/store')
        }
    }, [])
    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            const data = {
                email: email,
                password: password,
                returnSecureToken: true

            }
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3logzk0W9DqfQXUixffkDdyDb-MgF30k', data, {
                headers: {
                    'Content-Type': 'application/json',

                }
            })
            navigate('/store')
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }
    return (
        <div>
            <SubSection section='Sign up' />
            <div className='login__container'>
                <div className='login__subContainer'>
                    <form onSubmit={handleSignUp}>
                        <h2>SIGN UP</h2>
                        <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Email</h3>
                            <input className='login__input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Password</h3>
                            <input className='login__input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='login__button'>SIGN UP</button>
                    </form>
                    <div className='login__link'>
                        <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }} to='/login'><h3 style={{ cursor: 'pointer', fontSize: '13px' }}>Login with existing account</h3></Link>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default SignUp