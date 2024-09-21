import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props.resData.card.card.info.name);
    const {name, cuisines, avgRating, cloudinaryImageId} = props?.resData?.card?.card?.info;
    return(
        <div className="restro-card">
            <img className="restro-card-logo" alt="restro-card-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{props.resData.card.card.info.sla.deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard;