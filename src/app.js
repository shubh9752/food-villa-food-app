import React from "react";
import  ReactDOM  from "react-dom/client";
import Heading from "./components/Title";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { IMG_URL } from "./constants";

// const heading=React.createElement("h1",{id:"heading1"},"this is heading 1");
// const heading2=React.createElement("h2",{id:"heading2"},"this is heading 2");
// const heading3=<h1>hello this is jsx</h1>
// const container=React.createElement("div",{id:"container"},[heading,heading2,heading3]);
// const Title=()=>{

//     return(
//        <a href="/"> 
//      <img className="titleLogo" alt="food order app" src="https://marketplace.canva.com/EAESMsqG9rI/3/0/1600w/canva-grey-%26-green-elegant-minimal-good-taste-food-restaurant-logo-jeSR74GRMC8.jpg" /> 
//      </a>
//     )
// }
//swigy copied api data



// const cardsData={
//     name:"Burger king",
//     img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
//     cuisine:["American","Italian"],
//     rating:"4.2"
// }



const AppLayoutComponent=()=>{
    return(
        <>
        <Heading/>
        <BodyComponent/>
        <FooterComponent/>

        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root")); 
root.render(<AppLayoutComponent/>);