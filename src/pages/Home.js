import React from 'react'
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import useFirebase from '../hooks/useFirebase';
import '../assets/sass/style.scss'

const Home = () => {
    const { user, handleLogout } = useFirebase()

    return (
        <div>
            {
                user?.email ?
                    <h2 style={{ display: 'flex', flexDirection: "row", justifyContent: 'center' }}>
                        <button onClick={handleLogout} className='logout-btn'>Logout</button>
                    </h2>
                    :
                    <h2 style={{ display: 'flex', flexDirection: "row", justifyContent: 'center' }}>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                    </h2>
            }
            <Cards />
        </div >
    )
}

export default Home;