import { useState,useEffect } from "react";
import ResaurentCard from "./ResaurentCard";
import Shimmer from "./Shimmer";
import useonlineStatus from "../utili/useOnlineStatus";

import useOfflineContent from "../utili/useOfflineContent";

const Body = () => {

const [resListData, setResListData] = useState([]);
const [restData, setResetData] = useState([]);
const [searcResturent, setSearcResturent] = useState([]);
const [searchText, setSearchText] = useState("");
const [isTopRated, setIsTopRated] = useState(false);
const {API_URL} = require("../utili/constant");



useEffect(() => {
    fetchData();
}, []);

    const fetchData = async () => {
    try {
        const data = await fetch(API_URL);
        const json = await data.json();

        // Get all cards from the API
        const allCards = json?.data?.cards || [];

        // Extract restaurants from every card
        const restaurantList = allCards.flatMap((card) => {
        return (
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
            []
        );
        });

        console.log("All API Cards:", allCards);
        console.log("All Restaurants:", restaurantList);

        // Store restaurant data
        setResListData(restaurantList);
        setResetData(restaurantList);
        setSearcResturent(restaurantList);

    } catch (error) {
        console.error("Error fetching restaurants:", error);
    }
    };

const handleTopRated = () => {
    const filteredList = resListData.filter((res) => res.info.avgRating > 4.3)
    setResListData(filteredList);   
     setSearcResturent(filteredList);
    setIsTopRated(true);
}
const onlineStatus = useonlineStatus();

if(onlineStatus === false) 
    return useOfflineContent();
  
return resListData.length === 0 ?(
        <Shimmer />
) : (
    <div className="rest-container container">
        <h1>Top Restaurants In Chandigarh</h1>
        <div className="top-filter">
            <div className="search">
                <input type="text"
                className="search-box"
                value={searchText}
                onChange={(e)=>
                     setSearchText(e.target.value)   
                }
                />
                <button onClick={()=>{
                    const searcResturent = resListData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()) );
                    setSearcResturent(searcResturent);
                    setIsTopRated(true);
                }}
                >Search</button>
            </div>
          
           <button  className="filterbtn" 
           onClick={handleTopRated}>
            Top Rated </button>
        </div>
        <div className="total-items">Total items: {searcResturent.length}</div>
        <div className="restaurant-list">
           {searcResturent.map((restaurant, index) => (
                <ResaurentCard
                    key={restaurant?.info?.id ?? index}
                    restData={restaurant}
                />
            ))}
        </div>       
       
    </div>
 );
};

export default Body;