import React from 'react'
import HeroImg from '../../assets/images/hero.jpg'
import Sajek from '../../assets/images/sajek.jpg'
import CoxsBazar from '../../assets/images/coxs-bazar.jpg'
import Shreemangal from '../../assets/images/shreemangal.jpg'
import Sundarban from '../../assets/images/sundarban.jpg'

const Hero = () => {
    return (
        <div >
            {/* <img src={HeroImg} alt="" className='hero' /> */}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Sajek} class="caro-image" alt="..." />
                        <div class="hero-text text-center text-white">
                            <h1 className='fw-bold display-2'>Sajek</h1>
                            <div className='w-50'>
                                <p className='text-center'>Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river. The road to Sajek has high peaks and falls.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={CoxsBazar} class="caro-image" alt="..." />
                        <div class="hero-text text-center text-white">
                            <h1 className='fw-bold display-2'>Cox's Bazar</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Shreemangal} class="d-block caro-image" alt="..." />
                        <div class="hero-text text-center text-white">
                            <h1 className='fw-bold display-2'>Shreemangal</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Sundarban} class="d-block caro-image" alt="..." />
                        <div class="hero-text text-center text-white">
                            <h1 className='fw-bold display-2'>Sundarban</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Hero