import React, { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { IMG_URL, convertDate } from '../config'
// import '../App.css'

export default function SingleReview({review}) {
    const [showMore, setShowMore] = useState(false)

    function handleToggle() {
        setShowMore(!showMore)
    }

    function getImage (img) {
        if (img && img.includes('gravatar')) {
            return img.slice(1, img.length-1)
        } else {
            return `${IMG_URL}${img}`
        }
    }

    
    return (
        <>
            <div style={{padding: '10px', borderBottom: '1px solid #ccc'}}>
                <Row>
                    <Col md={2}>
                        <Image style={{width:'60px', height: '60px', margin: '0 auto' }} src={getImage(review.author_details['avatar_path'])} fluid roundedCircle />
                    </Col>
                    <Col md={10}>
                        <h5 style={{margin: '0px', marginTop: '5px'}}>Review by {review.author}</h5>
                        <p style={{color: '#333', margin: '0'}}>{convertDate(review.created_at)}</p>
                        {showMore?<p style={{marginTop: '8px'}}>{review.content}</p>:<p style={{marginTop: '8px'}}>{review.content.slice(0,200)}</p>}
                        {
                            !showMore ? <p style={{color: 'red', cursor: 'pointer'}} onClick={handleToggle}>More</p>: <p style={{color: 'red', cursor: 'pointer'}} onClick={handleToggle}>Less</p>
                        }
                    </Col>
                </Row>
            </div>
        </>
    )
}
