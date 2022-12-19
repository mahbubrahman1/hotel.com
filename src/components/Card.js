import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../assets/sass/style.scss'

const Card = ({ place }) => {
    return (
        <motion.div className='item' key={place.title}>
            <img src={place.image} alt="" className='place-image' />
            <Link to={`/${place.id}`}>
                <h2 className='card-title'>{place.title}</h2>
            </Link>
        </motion.div>
    )
}

export default Card