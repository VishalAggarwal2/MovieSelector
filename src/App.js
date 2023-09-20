import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './Components/Movie';
import MovieAbout from './Components/MovieAbout';
import { useState } from 'react';
import './App.css'
const App = () => {
  const[data,setData]=useState([]);
    const da=(arr)=>{
      setData(arr);
      console.log(data);
    }
  return (
  <>

      <Router>
      <Routes>
 
         <Route path='/' element={ <Movie da={da} />}></Route>
        <Route path="/MovieAbout/:name" element={<MovieAbout dat={data} />} />
      </Routes>
    </Router></>
  );
};

export default App;
