import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/sass/style.scss'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Register = () => {
    return (
        <div>
            <h2>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Home
                </Link>
            </h2>
            <form className='login-form'>
                <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Create an account</h1>
                <div class="content">

                    <div class="input-field">
                        <input type="text" placeholder="Your Name" />
                    </div>

                    <div class="input-field">
                        <input type="email" placeholder="Email" />
                    </div>

                    <div class="input-field">
                        <input type="password" placeholder="Password" />
                    </div>

                    <button className='login-button'>Login</button>

                    <h4>Already have an account? <Link to='/login'>Login</Link></h4>

                    <h4>or</h4>

                    <button className='google-signin-btn'>
                        <FontAwesomeIcon icon={faGoogle} /> SignIn with Google
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register