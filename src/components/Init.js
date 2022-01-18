import React from "react";
import logobar from '../logobar.png';
import { Link } from "react-router-dom";

const Init = () =>{
    return (
        <div className="grid place-content-start h-48">
      <img className="" src={logobar}></img>
      <Link to="/Rest"><button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 
      rounded-lg focus:shadow-outline hover:bg-green-800">GARZÓN</button></Link>
      <Link to="/Kitchen"><button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 
      rounded-lg focus:shadow-outline hover:bg-green-800">COCINA</button></Link>
    </div>
    )
}

export default Init;