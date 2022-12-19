import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import HeroImg from '../assets/images/hero.jpg'
import Card from './Card'
import places from '../assets/data/places'
import '../assets/sass/style.scss'

const Cards = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div>
            <img src={HeroImg} alt="" className='hero' />
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    {
                        places.map(place => {
                            return (
                                <Card place={place} key={place.id} />
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Cards