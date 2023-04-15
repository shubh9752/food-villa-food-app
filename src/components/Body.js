import FoodCards from "./FoodCards";
import Shimmer from "./ShimmerUi";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";

function filterData(searchTxt,searchRest){
    const data = searchRest.filter((rest)=>
        rest.data.name.toLowerCase().includes(searchTxt.toLowerCase())
    )
    return data;
}



const BodyComponent=()=>{
    const [searchTxt,setSearchTxt]=useState("");
    const [searchRest,setSearchRest]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);


    


    useEffect(()=>{
        getRestData();
    },[]);
    
    async function getRestData(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData=await data.json();
        console.log(jsonData);
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
        setSearchRest(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

  

    if(!allRestaurants) return null;
    return allRestaurants.length===0?<Shimmer/>:(
        <>
          <div className="search-bar">
            <input className="search" placeholder="search food" value={searchTxt} onChange={e=> {setSearchTxt(e.target.value)}} />
            <button className="search-btn" onClick={()=>{const data=filterData(searchTxt,allRestaurants);
            setSearchRest(data);
            }} >search</button>
        </div>
        
        <div className="cards-list">
       
      
            {
                searchRest.map((rest)=>{
                    
                    return <FoodCards {...rest.data} key={rest.data.id}/>
                })
            }
        
        </div>

        </>
    );
};

export default BodyComponent;