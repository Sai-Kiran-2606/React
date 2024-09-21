import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.card.card.info.avgRating > 4.3);
                    setListOfRestaurants(filteredList);
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;