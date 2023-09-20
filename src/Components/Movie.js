import React, { useEffect } from 'react'

import { useState } from 'react';

import "./Main.css";
import Movicomp from './Movicomp';
const Movie = (props) => {
    const[search,setSearch]=useState("");
    const [movie,setMovie]=useState([]);
    const val=(e)=>{
     
    setSearch(e.target.value);
    }
    const ft=async()=>{
        let data =await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e6b0671&s=${search}`);
        
        let prsdata = await data.json();
        // console.log(prsdata)
       await setMovie(prsdata.Search);
        // console.log(movie);
    
    }

    useEffect(()=>{
        
          movie!=null?props.da(movie):props.da([]);
        
        
 
    })

  return ( <>
    <div className='input'> 
       <div> <input  className='search' type='search' placeholder='Movies?' value={search} onChange={val}/></div>
        <button  className="search-btn"onClick={ft}>Search</button>

    </div>
 <div className='box'>

        { 
       
         movie!=null?movie.map((e)=>{
             return <Movicomp id={e.imdbID} title={e.Title} img ={e.Poster}></Movicomp>
            }):<div style={{color: "white",marginTop: "3rem",fontSize: "5rem",width: "70%",margin: "auto"}}>"Opps,Sorry To Say But This Movie Does Not Found On Our Data Base"</div>
        }
    </div>
</>
  )
  
}

export default Movie
