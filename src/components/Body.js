import {RestaurantCard, WithPromotedlabel} from "./RestaurantCard.js";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = WithPromotedlabel(RestaurantCard);

    // console.log(listOfRestaurants);

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

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return (<h1>"You're offline. Please check your internet connection"</h1>);

    const {loggedInUser, setUserName} = useContext(UserContext);

    //conditional rendering
    return listOfRestaurants.length === 0? <Shimmer />:(
        <div className="body">
            <div className="body-filter flex">
                <div className="search m-2 p-2">
                    <input type="text" className="border border-solid border-black p-1 rounded-md"  onChange={(e) => {
                        setSearchText(e.target.value);
                    }} value={searchText}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                        //Filter the restaurants and update the UI
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredRestaurants);
                        }
                    }>Search</button>
                </div>
                <div className="search m-2 p-2 flex items-center">
                    <button className="bg-gray-200 px-2 py-2 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4.2);
                        setFilteredRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-2 p-2 flex items-center">
                    <label>Username: </label>
                    <input type="text" className="p-1 border border-black" 
                    value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>

            <div className="restro-container flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => 
                        <Link key={restaurant.card.card.info.id} to={"/restaurants/"+restaurant.card.card.info.id}>
                            {restaurant.card.card.info.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Body;