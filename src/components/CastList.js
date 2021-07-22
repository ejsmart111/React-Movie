import React, { useEffect, useState } from 'react'
import './AppNavbar.css'
import { Container, Row, Col } from 'react-bootstrap'
import CastCard from './CastCard'
import { Link } from 'react-router-dom'

export default function CastList({castList, movieId}) {
    
    return (
        <div className="categories-container">
            <Container>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2 style={{color: '#333'}}>Top Billed Casts</h2>
                    {
                        (castList.length <= 8) ? <Link to={`/casts/${movieId}`}><p style={{marginTop: '7px', color: 'red', cursor: 'pointer'}}>More</p></Link>:<></>
                    }
                </div>

                <div>
                    <Row>
                        {
                            castList.map((cast, index) => {
                                return <Col key={cast.id} md={3}>
                                    <CastCard cast={cast}/>
                                </Col>
                            })
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}
