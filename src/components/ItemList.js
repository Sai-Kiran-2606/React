import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
    const {items} = props;
    // console.log(items);
    return(
        <div>
            {
                items.map((item) => (
                    <div key={item?.card?.info?.id} className="border-gray-300 border-b-2 mt-2 mx-3 flex justify-between">
                        <div>
                            <div className="text-left font-semibold">
                                <span className="tex-lg">{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price ? (item.card.info.price/100) : (item.card.info.defaultPrice/100)}</span>
                            </div>
                            <p className="text-left italic my-2">{item.card.info.category}</p>
                        </div>
                        <div>
                            <div className="absolute">
                                <button className="bg-slate-100 text-green-900 rounded-lg shadow-lg mx-10">Add +</button>
                            </div>
                            <img src={CDN_URL+item.card.info.imageId} className="w-32 h-auto mb-4"/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ItemList;