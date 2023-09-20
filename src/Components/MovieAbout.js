import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieAboutComp from './MovieAboutComp';
const MovieAbout = ({dat}) => {
  const { name } = useParams();
  const[arrr,setArrr]=useState([])
  const set=()=>{
    var arr= dat.filter((e)=>{
      return e.imdbID===name;
    }
    ) 
    console.log(arr);
    setArrr(arr);
    console.log(arrr);
  }
  useEffect(()=>{
    set();  
  },[])
  return (
    <div>
     {
arrr.map((e)=>{
  return <MovieAboutComp title={e.Title} year={e.Year} img={e.Poster} type={e.Type} ></MovieAboutComp>
})

     }

    </div>
  );
};

export default MovieAbout;
