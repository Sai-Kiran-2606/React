import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="food"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-logout" onClick={() => {
                        if(btnName === "Login") {
                            setBtnName("Logout");
                        }
                        else{
                            setBtnName("Login");
                        }
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;