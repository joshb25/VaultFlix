import React, {useState} from "react";
import MovieCard from "./MovieCard";
import TvCard from "./TvCard";

export default function SearchhQuery(){
    const [submit, setSubmit]=useState(false)

    const [query, setQuery]=useState('');

    const [movies, setMovies]=useState([]);
    const [tv, setTv]=useState([])
    // console.log(movies)
     const API_KEY=process.env.REACT_APP_API_KEY
    //  console.log(API_KEY)

    function inpt(e){
        setQuery(e.target.value)
    }


    async function search(e){
        e.preventDefault();

        const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        const url2=`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
         const urls=[url,url2]




        try{
            const response = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))
             setMovies(response[0].results)
             setTv(response[1].results)
             setSubmit(true)
            
            //  setMovies(response[0].results)
            //  const res= await fetch(url);
            //  const data= await res.json();
            //  setMovies(data.results)
        
        }catch(err){
            console.log(err)
        }

        
    }

    return (
        <>
        <header style={{position: submit && "relative", margin: submit && "1em auto", height: submit && "200px"}}>
            <h1 className="title">VaultFlix</h1>
            <p className="sub-title"> A movie and tv show database </p>
            <form className="form" onSubmit={search} style={{display: submit && "grid", gridTemplateColumns: submit &&  "1fr 1fr 1fr", width: submit && "400px"}}>
                <label htmlFor="query" className="label" style={{marginLeft: submit && "0", marginRight: submit && "-2em", wordSpacing: submit && "100px"}}>Query Search:</label>
                <input
                 style={{marginLeft: submit && "0"}}
                    type="text"
                    name="query"
                    placeholder="search for show, movie.."
                    value={query}
                    className="input"
                    onChange={inpt}
                    required
                />
                <button type="submit" className="button">search</button>
            </form>
        </header>
        <main className="list">
        {movies.filter(movie=>movie.poster_path).map(movie=> (<MovieCard movie={movie} key={movie.id}/> ))}
        {tv.filter(t=>t.poster_path).map(t=> (<TvCard tv={t} key={t.id}/> ))}
        
        </main>

      
        </>

    )
}


