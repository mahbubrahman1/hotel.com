import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import HeroImg from '../assets/images/hero.jpg'
import '../assets/sass/style.scss'

const Home = () => {
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
                                <motion.div className='item' key={place.title}>
                                    <img src={place.image} alt="" className='place-image' />
                                    <Link><h2 className='card-title'>{place.title}</h2></Link>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Home;