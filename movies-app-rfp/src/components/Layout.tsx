import Navigation from "./navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { TopRated } from "./TopRated";
import { useEffect, useState } from "react";
import axios  from 'axios';
import {Key} from '../config/apiCall';
import '../App.css';
import { Popular } from "./Popular";
import { GlobalProvider } from "../context/GlobalState";




export const Layout:React.FC= () => {
    const [content, setContent] = useState([]);
    const [series, setSeries] = useState([]);
    const [popular, setPopular] = useState([]);

    const fetchUpcoming = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}`);
        console.log('Upcoming Movies Data', data.results);
        setContent(data.results);
    }

    const fetchTopRated = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${Key}`);
        console.log('Top Rated Data',data.results);
        setSeries(data.results);
    }

    const fetchPopular = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}`);
        console.log('Popular Movies Data',data.results);
        setPopular(data.results);
    }

    
    
    useEffect(()=>{
        fetchUpcoming();
        fetchTopRated();
        fetchPopular();
        
    },[]);
    
    return (
        <>
        <GlobalProvider>
            <Navigation/>
            <Switch>
                <Route exact path='/'>
                    <h2>Upcoming Movies</h2>
                    <Home data={content}/>
        
                    <h2>Top Rated TV Shows</h2>
                    <TopRated series={series}/>
                    
                    <h2>Poplar Movies</h2>
                    <Popular popular={popular}/>
                    
                </Route>
                <Route exact path='/profile'>
                    <Profile/>
                </Route>
            </Switch>
        </GlobalProvider>
        </>
    )
}

