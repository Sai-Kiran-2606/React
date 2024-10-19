import ItemList from "./ItemList";

const RestaurantCategory = ({data, showAccordion, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }; 

    return(
        <div>
            <div className="w-6/12 bg-gray-100 shadow-2xl mx-auto my-2 p-1">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg my-3 mx-3">{data.title} ({data?.itemCards.length})</span>
                    <span className="my-3 mx-5">⬇️</span>
                </div>
                { showAccordion && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;