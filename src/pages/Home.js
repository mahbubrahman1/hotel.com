import React from 'react'
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';

const Home = () => {
    return (
        <div>
            <h2 style={{ display: 'flex', flexDirection: "row", justifyContent: 'center' }}>
                <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
            </h2>
            <Cards />
        </div>
    )
}

export default Home;