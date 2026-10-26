import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utili/constant";

const RestaurantMenu = () => {  
    const [resInfo, setResInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async () => {
        try {
            const response = await fetch(MENU_API + id);
            const json  = await response.json();
            setResInfo(json.data);
            console.log("Restaurant Menu:", json.data);
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
        }
    };

    console.log("Restaurant ID:", id); // Log the restaurant ID to the console

    return (
        <div className="restaurant-menu container">
            <h1>Restaurant Menu</h1>
            <p>This is the restaurant menu page.</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;