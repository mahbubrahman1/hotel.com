import React from 'react'
import HeroImg from '../assets/images/hero.jpg'
import places from '../assets/data/places'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Place = () => {
    const { id } = useParams()
    const place = places.find(place => place.id === id)

    return (
        <div>
            <img src={HeroImg} alt="" className='hero' />
            <h2>
                <Link to='/' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Link>
            </h2>

            <div className="container">

                <div className="item1">
                    <h1 style={{ fontSize: '50px' }}>{place.title}</h1>
                    <h3>{place.description}</h3>
                </div>
                <div className="item2">
                    <div className="form-container">
                        <form action="/action_page.php">

                            <label htmlFor="from">From</label>
                            <input type="text" id="from" name="from" />

                            <label htmlFor="to">To</label>
                            <input type="text" id="to" name="to" />

                            <div className="date-container">
                                <div>
                                    <label htmlFor="to">Departure Date: </label>
                                    <input type="date" id="departure" name="departure" />
                                </div>

                                <div>
                                    <label htmlFor="to">Return Date: </label>
                                    <input type="date" id="return" name="return" />
                                </div>
                            </div>

                            <Link to={`/${place.id}/hotels`}>
                                <input type="submit" value="Book" />
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Place