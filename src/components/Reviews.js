import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { API_KEY, BASE_URL } from '../config'
import axios from 'axios'
import SingleReview from './SingleReview'
import '../App.css'

export default function Reviews({ movieId, loading }) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`).then(data => {
            setReviews(data.data.results)
        })
    }, [movieId])
    
    return (
        <>
            {
                reviews.length > 1?
                    <div style={{marginTop: '80px'}}>
                        <Container>
                            <h3>Reviews</h3>
                                <div className="review-container" style={{marginTop: '60px'}}>
                                    {
                                        reviews.slice(0,5).map(review => {
                                            return <SingleReview key={review.id} review={review}/>
                                        })
                                    }
                                </div>
                        </Container>
                    </div>: <></>
            }
        </>
    )
}
