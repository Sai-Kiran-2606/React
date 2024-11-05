import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
    // console.log(props.resData.card.card.info.name);
    const {name, cuisines, avgRating, cloudinaryImageId} = props?.resData?.card?.card?.info;

    console.log(props.resData);
    
    return(
        <div className="restro-card m-4 p-4 w-[250px] h-[410px] bg-gray-200 rounded-lg hover:border border-solid border-black hover:bg-gray-100">
            <img className="restro-card-logo w-[230px] h-[200px] rounded-3xl" alt="restro-card-logo" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="italic py-1">{cuisines.join(", ")}</h4>
            <h4 className="py-1">{avgRating}⭐</h4>
            <h4>{props.resData.card.card.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
};

export const WithPromotedlabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute left-4 bg-green-100 text-black font-bold px-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};