import { REST_IMG } from "../utili/constant";
import { Link } from "react-router";

const ResaurentCard = (props) => {
    const { restData } = props; 
    const { name, cloudinaryImageId, costForTwo, cuisines, areaName, sla, avgRating, cta } = restData?.info;
    return (        
    <div className="resaurent-card" style={{ padding: "10px", borderRadius: "5px" }}>
        <img className="resaurent-image" src={ `${REST_IMG}/${restData.info.cloudinaryImageId}` } alt="Logo" />
        <h3 className="resaurent-name">{props.restData.info.name}</h3>
        <h4 className="resaurent-cuisines">{props.restData.info.cuisines.join(", ")}</h4>
        <h4 className="resaurent-area">Location: {props.restData.info.areaName}</h4>
        <h4 className="resaurent-delivery">Delivery Time: {props.restData.info.sla?.slaString}</h4>
        <h4 className="resaurent-price">{props.restData.info.costForTwo}</h4>
        <h4 className="resaurent-rating">{props.restData.info.avgRating} ⭐ Stars</h4>
        <Link className="order-link" to={`/restaurant/${props.restData.info.id}`} >
            {props.restData.info.name} {"MENU"} 
        </Link>
    </div>
);
}

export default ResaurentCard;