import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeSlideShow from "../components/HomeSlideShow";
import '../App.css'
import Categories from "../components/Categories";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL, API_KEY } from "../config";
import { Spinner } from "react-bootstrap";

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingToday, setTrendingToday] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [topRated, setTopRated] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchTrendingMovies = async (time) => {
        const req = await axios.get(`${BASE_URL}trending/movie/${time}?api_key=${API_KEY}`, )
        const movies = await req.data.results
        return movies
    }

    const fetchMovies = async (time, isObj) => {
        const req = await axios.get(`${BASE_URL}movie/${time}?api_key=${API_KEY}`, )
        const movies = await req.data.results
        return isObj === 'obj'? req.data:movies
    }

    useEffect(() => {
        fetchTrendingMovies('week').then(res => setTrendingMovies([...res]))
        setLoading(false)
    }, [])

    useEffect(() => {
        fetchTrendingMovies('day').then(res => setTrendingToday([...res]))
    }, [])

    useEffect(() => {
        fetchMovies('upcoming', '').then(res => setUpcoming([...res]))
    }, [])

    useEffect(() => {
        fetchMovies('top_rated', '').then(res => setTopRated([...res]))
    }, [])
  
    return (
        <>
            {
                loading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: '0'}}>
                    <Spinner size="xl" animation="grow"/>
                </div> : <div>
                    <HomeSlideShow trendingMovies={trendingMovies}/>
                    <div style={{marginTop: '120px'}}>
                        <Categories rows={3} linkForMore={`/trending_today`} title={'Trending Today'} category={trendingToday.slice(0,8)}/>
                    </div>
                    <div style={{marginTop: '120px'}}>
                        <Categories rows={3} title={'Trending This Week'} linkForMore={`/trending_this_week`} category={trendingMovies.slice(0,8)}/>
                    </div>
                    <div style={{marginTop: '120px', marginBottom: '120px'}}>
                        <Categories rows={3} title={'Upcoming Movies'} linkForMore={`/upcoming_movies`} category={upcoming.slice(0,8)}/>
                    </div>
                    <div style={{marginTop: '120px', marginBottom: '120px'}}>
                        <Categories rows={3} title={'Top Rated Movies'} linkForMore={`/top_rated_movies`} category={topRated.slice(0,8)}/>
                    </div>
                </div>
            }
        </>
    )
}
