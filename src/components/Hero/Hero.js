import React, { useEffect, useRef, useState } from 'react'
import HeroImg from '../../assets/images/hero.jpg'
import images from '../../assets/images/cover-images'
import { motion } from 'framer-motion'
import '../../App.css';

const Hero = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div >
            <img src={HeroImg} alt="" className='hero' />
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    {
                        images.map(image => {
                            return (
                                <motion.div className='item' key={image}>
                                    <img src={image} alt="" />
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Hero