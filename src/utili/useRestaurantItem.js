import { useEffect, useState } from "react";

import { DUMMY_API } from "./constant";

const useRestaurantItem = (id) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantItem();
    }, []);

     const fetchRestaurantItem = async () => {
        try {
            const response = await fetch(DUMMY_API);
            const json = await response.json();
            setRestInfo(json.data);
        } catch (error) {
            console.error("Error fetching restaurant item:", error);
        }
    };
    return restInfo;
}
export default useRestaurantItem;