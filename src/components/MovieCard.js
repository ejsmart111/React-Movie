import React from 'react'
import './AppNavbar.css'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { IMG_URL, convertDate } from '../config'
import LazyLoad from 'react-lazyload'

export default function MovieCards({movie}) {

    const paragraphStyle = {
        margin: '0',
        marginTop: '5px',
        padding: '0',
        color: '#7b7c7c'
    }

    return (
        <div>
            <Link to={`/movie/${movie.id}`}>
                <div className="movie-container">
                    <LazyLoad height={100}>
                        <Image fluid={true} alt={`${movie.title} poster`} className="img-poster" src={`${IMG_URL}${movie.poster_path}`}></Image>
                    </LazyLoad>

                    <p style={{...paragraphStyle, color: '#333'}}><b>{movie.title}</b></p>

                    <p style={paragraphStyle}>{convertDate(movie.release_date)}</p>

                    <div style={{display: 'flex', marginTop: '10px', height: '10px', justifyContent: 'space-between'}}>
                        <div style={{width: '80%', backgroundColor: '#ccc', borderRadius:'5px', height: '10px'}}>
                            <div style={{backgroundColor: movie.vote_average>=8?'#26ef5f':movie.vote_average>=5 && movie.vote_average<8? '#ecf754': '#f24848', borderRadius: '5px', width: `${movie.vote_average*10}%`, height: '10px'}}></div>
                        </div> 
                        <p style={{marginTop: '-8px', color: '#333333'}}><b>{(movie.vote_average*10).toFixed(1)}%</b></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
