import React from 'react'
import '../assets/sass/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'

const Login = () => {
    const { handleGoogleSignIn } = useFirebase();

    return (
        <div>
            <h2>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Home
                </Link>
            </h2>
            <form className='login-form'>
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
                </div>
            </form>
            <button onClick={handleGoogleSignIn} className='google-signin-btn'>
                <FontAwesomeIcon icon={faGoogle} /> SignIn with Google
            </button>
        </div>
    )
}

export default Login