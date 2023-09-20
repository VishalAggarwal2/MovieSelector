import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Movicomp = (props) => {
//   const history = useHistory();

//   const handleButtonClick = () => {
//     // Use the history.push() method to navigate programmatically
//     history.push(`/MovieAbout/${props.title}`);
//   };
  const link= `/MovieAbout/${props.id}`
  return (
    <div>
      <div className="container" style={{color: "white"}}>
        <img src={props.img} alt="" width="200" />
        <h1>{props.title}</h1>
       <button className='search-btn' > <Link style={{color: "white",textDecoration: "none"}} to={link}>Know More</Link></button>
        {/* <button onClick={handleButtonClick}>Go to MovieAbout</button> */}
      </div>
    </div>
  );
};

export default Movicomp;
