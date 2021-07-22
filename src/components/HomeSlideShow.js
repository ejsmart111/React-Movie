import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './HomeSlideShow.css'
// import { StarFill } from 'react-bootstrap-icons'
import { IMG_URL } from '../config'

export default function HomeSlideShow({trendingMovies, isObj}) {
    const [slideIndex, setSlideIndex] = useState(0)

    useEffect(() => {
        let interval
        if (trendingMovies.length > 1) {
            interval = setInterval(() => {
                setSlideIndex(slideIndex + 1)
                if (slideIndex === 4) setSlideIndex(0)
            }, 15000);


            return () => clearInterval(interval)
        }
    })

    return (
        <div>
            {
                (isObj !== 'object') ? <div className="slide-container">
                    {
                        trendingMovies.slice(0,5).map((trendingMovie, index) => {
                            return slideIndex === index && <div key={trendingMovie.id} className="slide-item">
                                <img
                                    className="d-block w-100"
                                    src={`${IMG_URL}${trendingMovie.backdrop_path}`}
                                    alt="First slide"
                                    style={{objectFit: 'cover'}}
                                    height="500px"
                                    />
                                <div className="slide-caption">
                                    <Container>
                                        <h3>{trendingMovie.title}({trendingMovie.release_date.substring(0,4)})</h3>
                                        <p>{trendingMovie.overview}</p>
                                        <small>Year: {trendingMovie.release_date.substring(0,4)} <span style={{marginLeft: '10px'}}> Rating: {trendingMovie.vote_average}</span> 
                                        </small>
                                    </Container>
                                </div>
                            </div>
                        })
                    }
                </div> : <div className="slide-container-alt">
                    <div key={trendingMovies.id} className="slide-item">
                        <img
                            className="d-block w-100"
                            src={`${IMG_URL}${trendingMovies.backdrop_path}`}
                            alt="First slide"
                            style={{objectFit: 'cover'}}
                            height="500px"
                            />
                        <div className="slide-caption">
                            <Container>
                                <h3>{trendingMovies.title}({trendingMovies.release_date.substring(0,4)})</h3>
                                <p>{trendingMovies.overview}</p>
                                <small>Year: {trendingMovies.release_date.substring(0,4)} <span style={{marginLeft: '10px'}}> Rating: {trendingMovies.vote_average}</span> 
                                </small>
                            </Container>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
