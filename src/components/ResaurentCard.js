import { REST_IMG } from "../utili/constant";
import { Link } from "react-router";

const ResaurentCard = (props) => {
    const { restData } = props; 
    const { name, cloudinaryImageId, costForTwo, cuisines, areaName, sla, avgRating, cta } = restData?.info;
    return (        
    <div className="resaurent-card" style={{ padding: "10px", borderRadius: "5px" }}>
        <img className="resaurent-image" src={ `${REST_IMG}/${cloudinaryImageId}` } alt="Logo" />
        <h3 className="resaurent-name">{name}</h3>
        <h4 className="resaurent-cuisines">{cuisines.join(", ")}</h4>
        <h4 className="resaurent-area">Location: {areaName}</h4>
        <h4 className="resaurent-delivery">Delivery Time: {sla?.slaString}</h4>
        <h4 className="resaurent-price">{costForTwo}</h4>
        <h4 className="resaurent-rating">{avgRating} ⭐ Stars</h4>
        <Link className="order-link" to={props?.restData?.cta?.link} >
            {name} {"MENU"} 
        </Link>
    </div>
);
}

export default ResaurentCard;