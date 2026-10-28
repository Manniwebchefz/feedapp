import { useParams } from "react-router";
import useRestaurantItem from "../utili/useRestaurantItem.js";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {  
    
    const { id } = useParams();
    
    const restInfo = useRestaurantItem(id);

    if (restInfo === null) return <Shimmer />;



   const restaurantInfo = restInfo?.cards?.find(
            (card) => card?.card?.card?.info
        )?.card?.card?.info;

    const name = restaurantInfo?.name;    

    const regularCards =
    restInfo?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];   
    
    console.log("Regular Cards:", regularCards);

    const menuItems = regularCards.filter((card) => card?.card?.card?.itemCards)
    .flatMap((card) => card.card.card.itemCards || []);

    console.log("Menu Items:", menuItems);


    return (
        <div className="restaurant-menu container">
            <h1>Name : {name}</h1>
            <p>This is the restaurant menu page.</p>
            <ul>
               {menuItems.map((item, index) => (
                <li key={item?.card?.info?.id ?? index}>
                    {item?.card?.info?.name} - ₹
                    {(item?.card?.info?.price ??
                    item?.card?.info?.defaultPrice ?? 0) / 100}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;