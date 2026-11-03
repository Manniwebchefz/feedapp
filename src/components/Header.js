import { LOGO_URL } from "../utili/constant";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utili/useOnlineStatus";

const Header   = () => {

    const [headerBtn , setHeaderBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
       <div className="w-full  flex justify-between bg-pink-100 shadow-lg ml-auto mr-auto md:bg-pink-50">
            <div className="w-max[1300px] ml-auto mr-auto flex justify-between">
                <div className="w-2/12"><img src={LOGO_URL} alt="Logo" /></div>
                <div className="w-10/12 flex justify-center items-center">
                    <ul className="flex justify-between items-center">
                        <li className="px-4 py-2 cursor-pointer">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                        <li className="px-4 py-2 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="px-4 py-2 cursor-pointer"><Link to="/about">About</Link></li>
                        <li className="px-4 py-2 cursor-pointer"><Link to="/video">Video</Link></li>
                        <li className="px-4 py-2 cursor-pointer"><Link to="/grocery">Grocery</Link></li>
                        <li className="px-4 py-2 cursor-pointer"><Link to="/help">Help</Link></li>
                    
                        <button className="w-20 bg-yellow-400 py-2 mx-10 cursor-pointer hover:bg-yellow-500" onClick={() =>{
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
              
    </div>
    )
};
    


export default Header;