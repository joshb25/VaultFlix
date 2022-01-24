import React from "react"

export default function TvCard({tv}){
    return (
         <div className="card" >
                    <img 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${tv.poster_path}`}
                        alt={tv.title + " poster"}
                    />
                    <div className="content">
                        <h3 className="title">{tv.title}</h3>
                        <p>Release Date: {tv.release_date}</p>
                        <p>Rating: {tv.vote_average}</p>
                        <p className="description">{tv.overview}</p>
                    </div>

                </div>
    )
}