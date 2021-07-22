import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import CastList from '../components/CastList'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../config'

export default function CastPage({match}) {
    const [castList, setCastList] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}movie/${match.params.id}/credits?api_key=${API_KEY}`).then(data => {
            setCastList(data.data.cast)  
        })
    }, [match.params.id])

    return (
        <div>
            <Container style={{marginTop:'80px'}}>
                <CastList castList={castList} movieId={match.params.id}/>
            </Container>            
        </div>
    )
}
