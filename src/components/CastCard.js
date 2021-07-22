import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import './AppNavbar.css'
import { IMG_URL } from '../config'

export default function CastCard({cast}) {

    const paragraphStyle = {
        margin: '0',
        marginTop: '5px',
        padding: '0',
        color: '#7b7c7c'
    }

    return (
        <div>
            <Link to={`/cast/${cast.id}`}>
                <div className="movie-container">
                    <Image fluid={true} alt={`${cast.name} poster`} className="img-poster" src={`${IMG_URL}${cast.profile_path}`}></Image>

                    <p style={{...paragraphStyle, color: '#333'}}><b>{cast.name}</b></p>

                    <p style={paragraphStyle}>{cast.character}</p>
                </div>
            </Link>
        </div>
    )
}
