import {useEffect, useState} from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fecthMenu();
    }, []);

    const fecthMenu = async () => {
        const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json?.data?.cards?.slice(2));
    };

    return resInfo;
};

export default useRestaurantMenu;