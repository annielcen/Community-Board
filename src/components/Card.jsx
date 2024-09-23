import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.concert.image} alt={props.concert.name} className="card-image" /> 
            <h2>{props.concert.name}</h2>
            <p>{props.concert.date}</p>
            <p>{props.concert.location}</p>
            <a href={props.concert.web}>
                <button>View More</button>
            </a>
        </div>
    )
}

export default Card;