import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Row, Col, Container } from 'react-bootstrap'
import '../components/HomeSlideShow.css'
import HomeSlideShow from '../components/HomeSlideShow'
import CastList from '../components/CastList'
import Reviews from '../components/Reviews'
import Categories from '../components/Categories'
import { Spinner } from 'react-bootstrap'

export default function MovieDetails({match}) {
    const BASE_URL = 'https://api.themoviedb.org/3/'
    const API_KEY = 'd1d49e0b77dcd2bfae34f164080aa3ce'
    const [movieDetail, setMovieDetail] = useState([])
    const [loadingDetail, setLoadingDetail] = useState(true)
    const [similarMovie, setSimilarMovie] = useState([])
    const [castList, setCastList] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}movie/${match.params.id}?api_key=${API_KEY}`).then(data => {
            setMovieDetail(data.data)
            setLoadingDetail(false)
            // setTimeout(() => {
                window.scrollTo(0,0)
            // }, 500);
        })
    }, [match.params.id])

    useEffect(() => {
        axios.get(`${BASE_URL}movie/${match.params.id}/credits?api_key=${API_KEY}`).then(data => {
            setCastList(data.data.cast)  
        })
    }, [match.params.id])

    useEffect(() => {
        axios.get(`${BASE_URL}movie/${match.params.id}/similar?api_key=${API_KEY}`).then(response => {
            setSimilarMovie(response.data.results)
        })
    }, [match.params.id])

    return (
        <div>
            { loadingDetail && <Spinner size="xl" animation="grow"/> }
            {
                !loadingDetail && <div>
                    <HomeSlideShow isObj={'object'} trendingMovies={movieDetail}/>
                    <div style={{marginTop: '120px'}}>
                        <Container style={{marginBottom: '40px'}}>
                            <Row>
                                <Col md={4}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <b>Budget</b>
                                        <p style={{color: 'red'}}>${movieDetail.budget}</p>
                                        <b>Revenue</b>
                                        <p style={{color: 'red'}}>${movieDetail.revenue}</p>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <div style={{display: 'flex'}}>
                                        <b>Genres:</b>
                                        <p>
                                        {
                                            movieDetail.genres.map(genre => {
                                                return <span style={{marginLeft: '8px'}} key={genre.id}> {genre.name} </span>
                                            })
                                        } 
                                        </p>                                       
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <CastList castList={castList.slice(0, 8)} movieId={match.params.id}/>
                        <Reviews loading={loadingDetail} movieId={match.params.id}/>
                        <div style={{marginTop: '120px', marginBottom: '40px'}}>
                            <Categories rows={3} linkForMore={''} title={'Similar Movies'} category={similarMovie.slice(0,12)}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
