import { IMG_URL } from "../constants";
import { restaurantList } from "../constants";

const FoodCards=({cloudinaryImageId,name,cuisines,lastMileTravelString})=>{
    
    return(
        <>
            <div className="cards">
                <img src={IMG_URL+cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4> {lastMileTravelString} minutes</h4>
            </div>
        </>
    )
}

export default FoodCards;