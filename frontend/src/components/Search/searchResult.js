import React from "react";
import {NavLink} from "react-router-dom";

const Result = ({listing}) => {
    return (
        <div className="search-listing">
            <div className="photo-holder">
                <img className="listing-photo" src={listing.photo} alt={listing.title}/>
            </div>
            <div className="search-info">
                <div className="listing-info">
                    <div className="title">
                        <NavLink to={`listings/${listing.id}`}>
                            <h2>{listing.title}</h2>
                        </NavLink>
                    </div>
                    <p>Sold by {listing.User.username}</p>
                </div>
            </div>
        </div>
    )
}

export default Result;
