import { LOGO_URL } from "../utili/constant";
import { useState } from "react";
import { Link } from "react-router";

const Header   = () => {

    const [headerBtn , setHeaderBtn] = useState("Login");

    return (
       <div className="header container">
        <div className="logo"><img src={LOGO_URL} alt="Logo" /></div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/video">Video</Link></li>
                <li><Link to="/support">help</Link></li>
              
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