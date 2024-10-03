import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        let json = await apiData.json();
        setListOfRestaurants(json?.data?.cards?.slice(3));
        setFilteredRestaurants(json?.data?.cards?.slice(3));
        // console.log(json?.data?.cards?.slice(3));
    }

    //conditional rendering
    return listOfRestaurants.length === 0? <Shimmer />:(
        <div className="body">
            <div className="body-filter">
                <div className="search">
                    <input type="text" className="search-box"  onChange={(e) => {
                        //Filter the restaurants and update the UI
                        setSearchText(e.target.value);
                    }} value={searchText}></input>
                    <button className="search-btn" 
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredRestaurants);
                        }
                    }>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4.2);
                        setFilteredRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.card.card.info.id} to={"/restaurants/"+restaurant.card.card.info.id}><RestaurantCard resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;