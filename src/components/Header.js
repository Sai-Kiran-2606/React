import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return(
        <div className="flex justify-between shadow-lg bg-gray-100">
            <div className="logo-container">
                <img className="w-20 rounded-3xl m-2" src={LOGO_URL} alt="food"></img>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus? "✅" : "🛑"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <button className="login-logout px-4" onClick={() => {
                        if(btnName === "Login") {
                            setBtnName("Logout");
                        }
                        else{
                            setBtnName("Login");
                        }
                    }}>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;