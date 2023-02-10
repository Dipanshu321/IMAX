import React, {useEffect,useState} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import './Cards.css'
import { Link } from "react-router-dom"


const Cards =({movie}) =>{

    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 1500)
    }, [])

    return <>
    {
        isLoading ? <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
               <img src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} className="cards_img" />
               
               <div className="cards_overlay">
                    <div className="card_title">{movie?movie.original_title:""}</div>
                   
                    <div className="card_runtime">
                        {movie?movie.release_date:""}
                        <span className="card_rating">{movie?movie.vote_average:""}<i className="fa fa-star"></i></span>
                    </div>
                    <div className="card_description">{movie ? movie.overview.slice(0,118) + "...":""}</div>
               </div>
            </div>
        </Link>
    }</>

}
export default Cards