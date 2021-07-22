import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL, API_KEY, IMG_URL, convertDate } from '../config'
import Categories from '../components/Categories'

export default function Cast({match}) {
    const [person, setPerson] = useState({})
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}person/${match.params.id}/movie_credits?api_key=${API_KEY}`).then(data => {
            setMovies(data.data.cast)  
        })
    }, [match.params.id])

    useEffect(() => {
        axios.get(`${BASE_URL}person/${match.params.id}?api_key=${API_KEY}`).then(data => {
            setPerson(data.data)  
        })
    }, [match.params.id])

    const paragraphStyle = {
        color: 'red'
    }
    
    return (
        <div>
            <div style={{marginTop: '80px'}}>
                <Container>
                    <Row>
                        <Col md={3}>
                            <Image fluid={true} alt={`${person.title} poster`} className="img-poster" src={`${IMG_URL}${person.profile_path}`}></Image>
                            <h4 style={{marginTop: '20px'}}>Personal Info</h4>
                            <b>Gender</b>
                            <p style={paragraphStyle}>{person.gender === 1? 'Female':'Male'}</p>
                            <b>Date of Birth</b>
                            <p style={paragraphStyle}>{convertDate(person.birthday)}</p>
                            <b>Place of Birth</b>
                            <p style={paragraphStyle}>{person.place_of_birth}</p>
                            <b>Death Day</b>
                            <p style={paragraphStyle}>{person.deathday?convertDate(person.deathday):'Still Alive'}</p>
                        </Col>
                        <Col md={9}>
                            <h2>{person.name}</h2>
                            <p style={paragraphStyle}>{person.also_known_as[0]}</p>

                            <h3>Biography</h3>
                            <p style={{fontSize: '14px', lineHeight: '30px'}}>{person.biography}</p>
                            <br/>
                            <Categories rows={4} category={movies.slice(0,9)} title={`Movies by ${person.name}`}/>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
