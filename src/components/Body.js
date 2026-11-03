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
    <div className=" w-[1300px] ml-auto mr-auto">
        <h1 className="text-3xl font-bold mt-10" >Top Restaurants In Chandigarh</h1>
        <div className="gap-4 flex justify-center mt-10 mb-10">
            <div className="flex gap-4">
                <input type="text"
                className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchText}
                onChange={(e)=>
                     setSearchText(e.target.value)   
                }
                />
                <button 
                className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
                onClick={()=>{
                    const searcResturent = resListData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()) );
                    setSearcResturent(searcResturent);
                    setIsTopRated(true);
                }}
                >Search</button>
            </div>
          
           <button  className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
           onClick={handleTopRated}>
            Top Rated </button>
        </div>
        <div className="total-items">Total items: {searcResturent.length}</div>
        <div className="restaurant-list">
           {searcResturent.map((restaurant, index) => (
                <ResaurentCard
                    key={restaurant?.info?.name ?? index}
                    restData={restaurant}
                />
            ))}
        </div>       
       
    </div>
 );
};

export default Body;