import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";


export const Title=()=>{



    return(
       <a href="/"> 
     <img className="titleLogo" alt="food order app" src="https://marketplace.canva.com/EAESMsqG9rI/3/0/1600w/canva-grey-%26-green-elegant-minimal-good-taste-food-restaurant-logo-jeSR74GRMC8.jpg" /> 
     </a>
    )
}

const Heading=()=>{

  const [loggedIn,setLoggedIn]=useState(true);
    return(
        <>
        <div className="header">
        <Title />  
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>cart</li>
            <li>{loggedIn?<button onClick={()=>setLoggedIn(false)}>Logout</button>:<button onClick={()=>setLoggedIn(true)}>login</button>}</li>
          </ul>

        </div>
        </div>
        </>
    )
}

export default Heading;
