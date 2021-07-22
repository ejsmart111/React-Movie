import React from 'react'
import  './AppNavbar.css'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

export default function Categories({ category, title, linkForMore, rows }) {
    return (
        <div className="categories-container">
            <Container>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2 style={{color: '#333'}}>{title}</h2>
                    {
                        (category.length <= 8) ? <Link to={linkForMore}><p style={{marginTop: '7px', color: 'red', cursor: 'pointer'}}>More</p></Link>:<></>
                    }
                </div>

                <div>
                    <Row>
                        {
                            category.map(movie => {
                                return <Col key={movie.id} md={rows}>
                                    <MovieCard movie={movie}/>
                                </Col>
                            })
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}
