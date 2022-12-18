import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import HeroImg from '../assets/images/hero.jpg'
import '../assets/sass/style.scss'
import Card from './Card'

const Cards = () => {
    const places = [
        {
            title: "Cox's Bazar",
            image: 'https://i.ibb.co/68CQFrs/coxs-bazar.jpg',
        },
        {
            title: "Sajek Valley",
            image: 'https://i.ibb.co/x76XXMc/sajek.jpg',
        },
        {
            title: "Shreemangal",
            image: 'https://i.ibb.co/gdv6SpB/shreemangal.jpg',
        },
        {
            title: "Jaflong",
            image: 'https://i.ibb.co/K09jchn/jaflong.jpg',
        },
        {
            title: "St. Martin",
            image: 'https://i.ibb.co/jvNjHTK/st-martin.jpg',
        },
        {
            title: "Sundarban",
            image: 'https://i.ibb.co/Z2xfY5M/sundarban.jpg',
        },
    ]

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
                                <Card place={place} key={place.title} />
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Cards