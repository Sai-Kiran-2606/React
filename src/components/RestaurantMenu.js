import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo[0]?.card?.card?.info;

    const itemCards = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;

    // console.log(resInfo);
    // console.log(itemCards);
    // itemCards.map((item) => {
    //     console.log(item.dish.info.name);
    // })

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.dish.info.id}>{item.dish.info.name} - Rs.{item.dish.info.price/100}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;