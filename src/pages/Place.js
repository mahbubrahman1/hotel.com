import React from 'react'
import HeroImg from '../assets/images/hero.jpg'
import places from '../assets/data/places'
import { useParams } from 'react-router-dom'


const Place = () => {
    const { id } = useParams()
    const place = places.find(place => place.id === id)

    return (
        <div>
            <img src={HeroImg} alt="" className='hero' />
            <h2>this is {place.title}</h2>
        </div>
    )
}

export default Place