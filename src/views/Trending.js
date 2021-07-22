import React, {useEffect, useState} from 'react'
import Categories from '../components/Categories'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../config'
import { Button, Container } from 'react-bootstrap'
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons'

export default function TrendingToday({time}) {
    const [trending, setTrending] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    let [page, setPage] = useState(1)

    useEffect(() => {
        axios.get(`${BASE_URL}/trending/movie/${time}?api_key=${API_KEY}&page=${page}`, ).then(response => {
            const incomingTrends = response.data.results
            setTrending([...incomingTrends])
            setPageNumber(response.data.total_pages)
            // setTimeout(() => {
                window.scrollTo(0,0)
            // }, 500);
        })
    }, [page, time])

    function pageNumberObject() {
        const obj = []
        for(let i = 1; i < pageNumber; i++) {
            obj.push({
                number: i
            })
        }
        return obj
    }
    
    return (
        <div>
            <div style={{marginTop: '80px'}}>
                <Categories rows={3} title={`Trending Today`} category={trending} linkForMore={''}/>
            </div>
            <Container>
                <p style={{marginTop: '20px'}}>Page {page} of {pageNumber}</p>
                <div style={{display: 'flex', alignContent: 'center', marginTop: '30px', marginBottom: '40px'}}>
                    {page !== 1 && <Button onClick={() => setPage(page-1)} style={{marginLeft: '10px'}} variant="primary"><ArrowLeft/></Button>}
                    {
                        pageNumberObject().slice(page-1, page+7).map(pagex => {
                            return <Button onClick={() => setPage(pagex.number)} style={{marginLeft: '10px'}} variant={page === pagex.number? 'success':'primary'}>{pagex.number}</Button>
                        })
                    }
                    {(page !== pageNumber) && <Button onClick={() => setPage(page+1)} style={{marginLeft: '10px'}} variant="primary"><ArrowRight/></Button>}
                </div>
            </Container>
        </div>
    )
}
