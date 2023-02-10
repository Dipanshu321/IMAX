import React  from "react";
import './Home.css'
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from '../../Components/MovieList/MovieList';

const Home = ()=>{

    const [Popularmovies, setPopularmovies] = useState([])
   
    useEffect(() => {
      fetch ("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then (res => res.json())
      .then (data => setPopularmovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
            <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus= 
                {false}> 
                {
                    Popularmovies.map (movie => (
                        <Link style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                            </div>
                            <div className="posterImage_overlay">
                                <div className="posterImage_title">
                                    {movie ? movie.original_title: ""}
                                </div>

                                <div className="posterImage_runtime">
                                    {movie ? movie.release_date: ""}
                                    <span className="posterImage_rating">
                                        {movie ? movie.vote_average: ""}
                                        <i className="fas fa-star"/> {" "}
                                    </span>
                                </div>

                                <div className="posterImage_description">
                                    {movie ? movie.overview: ""}
                                </div>

                            </div>
                        </Link>
                    ))
                }
            </Carousel>
            <MovieList/>
            </div>
        </>
    )
}
export default Home
