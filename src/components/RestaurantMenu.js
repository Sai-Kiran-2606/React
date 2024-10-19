import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    const [showTrue, setShowTrue] = useState(false);

    const handleTrue = () => {
        setShowTrue(!showTrue);
    }; 

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo[0]?.card?.card?.info;

    const itemCards = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;

    const categories = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <div className="text-center m-2">
            <h1 className="font-bold text-2xl p-2">{name}</h1>
            <p className="italic px-2">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {
                categories.map((Category, index) => (
                    <RestaurantCategory 
                        key={Category?.card?.card?.title} 
                        data={Category?.card?.card} 
                        showAccordion={index === showIndex ? handleTrue : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))
            }
        </div>
    );
};

export default RestaurantMenu;