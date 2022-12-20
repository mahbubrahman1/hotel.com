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

                            <input type="submit" value="Book" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place