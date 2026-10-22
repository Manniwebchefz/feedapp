import { LOGO_URL } from "../utili/constant";
import { useState } from "react";

const Header   = () => {

    const [headerBtn , setHeaderBtn] = useState("Login");

    return (
       <div className="header container">
        <div className="logo"><img src={LOGO_URL} alt="Logo" /></div>
        <div className="nav-items">
            <ul>
                <li><a href="https://www.swiggy.com/">Home</a></li>
                <li><a href="https://www.swiggy.com/support">help</a></li>
              
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