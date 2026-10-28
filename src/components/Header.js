import { LOGO_URL } from "../utili/constant";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utili/useOnlineStatus";

const Header   = () => {

    const [headerBtn , setHeaderBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
       <div className="header container">
        <div className="logo"><img src={LOGO_URL} alt="Logo" /></div>
        <div className="nav-items">
            <ul>
                <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/video">Video</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/help">Help</Link></li>
              
                <button className="login-btn" onClick={() =>{
                    headerBtn === "Login" 
                    ? setHeaderBtn("Logout")
                    : setHeaderBtn ("Login");
                    }}
                    >
                        {headerBtn}
                        </button>
            </ul>
        </div>  
    </div>
    )
};
    


export default Header;