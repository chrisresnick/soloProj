import React from "react";
import {NavLink} from "react-router-dom";

const Result = ({listing}) => {
    return (
        <div className="search-main">
            <div className="title">
                <NavLink to={`listings/${listing.id}`}>
                    <h2>{listing.title}</h2>
                </NavLink>
            </div>
            <div className="search-listing">
                <div className="search-photo-holder">
                    <img className="search-photo" src={listing.photo} alt={listing.title}/>
                </div>
                <div className="search-info">
                        <div className="search-description">
                            {listing.description}
                        </div>
                        <p>Sold by <b>{listing.User.username}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Result;
