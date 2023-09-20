import React from 'react'
import './Main.css'
const MovieAboutComp = (props) => {
  return (
    <div className="over">
       <div className='compa'> 
      <div>  <img src={props.img} alt="" /></div> 
    <div>
       <div   style={{color: "red"}}>{props.title}</div>
      
       <p> {props.type} Realease in{props.year}</p>
       <p> Its An {props.type}</p>
    </div></div></div>
  )
}

export default MovieAboutComp
