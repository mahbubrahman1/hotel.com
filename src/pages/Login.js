import React, { useState } from 'react'
import '../assets/sass/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Login = () => {
    const { handleGoogleSignIn, handleForm } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation()

    const googleSignin = () => {
        setIsLoading(false)

        handleGoogleSignIn()
            .then(result => {
                navigate(location.state?.from || '/')
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <h2>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Home
                </Link>
            </h2>
            <form onSubmit={handleForm} className='login-form'>
                <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Login</h1>
                <div className="content">
                    <div className="input-field">
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="input-field">
                        <input type="password" placeholder="Password" />
                    </div>

                    <button className='login-button'>Login</button>

                    <h4>Don't have an account? <Link to='/register'>Register</Link></h4>

                    <h4>or</h4>

                    <button onClick={googleSignin} className='google-signin-btn'>
                        <FontAwesomeIcon icon={faGoogle} /> SignIn with Google
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Login