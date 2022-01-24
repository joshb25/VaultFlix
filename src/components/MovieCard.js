import React from "react";


export default function MovieCard({movie}){
    return (
        
                <div className="card" >
                    <img 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + " poster"}
                    />
                    <div className="content">
                        <h3 className="title">{movie.title}</h3>
                        <p>Release Date: {movie.release_date}</p>
                        <p className="rating">Rating: {movie.vote_average}</p>
                        <p className="description">{movie.overview}</p>
                    </div>

                </div>

               
               
        

    )
}