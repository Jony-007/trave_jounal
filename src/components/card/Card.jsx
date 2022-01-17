import React from "react";
import "./card.css";
// import data from "../../data";

// import Data from "../../Data";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt={props.item.title} className="card-img" />

      <div className="card-content">
        <div className="location">
          <p className="country">
            <i className="fas fa-map-marker-alt"></i>{props.item.location}
          </p>

          <a href={props.item.googleMapsUrl} className="maps-location">View on Google Maps</a>


        </div>
          <h1 className="card-title">{props.item.title}</h1>
          <p className="card-start-end-date">{props.item.startDate} - {props.item.endDate}</p>
          <p className = "card-description">{props.item.description}</p>

      </div>
      
    </div>
  );
};

export default Card;
