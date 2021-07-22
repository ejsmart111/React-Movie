import React from "react";
import './App.css'
import AppNavbar from "./components/AppNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";
import Trending from "./views/Trending";
import CastPage from "./views/CastPage";
import Cast from "./views/Cast";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <AppNavbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/trending_today" component={() => <Trending time="day"/>} />
          <Route path="/trending_this_week" component={() => <Trending time="week" />} />
          <Route path="/casts/:id" component={CastPage} />
          <Route path="/cast/:id" component={Cast} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
