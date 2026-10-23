import { useState,useEffect } from "react";
import ResaurentCard from "./ResaurentCard";
import YouTubeCard from "./YouTubeCard";
import Shimmer from "./Shimmer";

const Body = () => {

const [resListData, setResListData] = useState([]);
const [restData, setResetData] = useState([]);
const [searcResturent, setSearcResturent] = useState([]);
const [searchText, setSearchText] = useState("");
const [isTopRated, setIsTopRated] = useState(false);

useEffect(() => {
    fetchdata();
}, []);

const fetchdata =  async () =>{
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890");
    const json = await data.json();

    // Optional Chaining
    const jsondata = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setResListData(jsondata);
    
    setResetData(jsondata);

    setSearcResturent(jsondata);
};

const handleTopRated = () => {
    const filteredList = resListData.filter((res) => res.info.avgRating > 4.3)
    setResListData(filteredList);   
     setSearcResturent(filteredList);
    setIsTopRated(true);
}

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
             {searcResturent.map((restaurant) => (
                    <ResaurentCard
                        key={restaurant.info.id}
                        restData={restaurant}
                    />
                ))}
        </div>       
        <div className="youtube-list ">
            <YouTubeCard />
        </div>
    </div>
 );
};

export default Body;