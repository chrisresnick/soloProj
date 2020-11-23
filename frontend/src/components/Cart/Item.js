import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {fetch} from "../../store/csrf";


const Item = ({item, delFromCart}) => {
    const [listing, setListing] = item.Listing;
    const seller = listing.User;
    const [date, setDate] = useState(new Date(item.date));
    const [participants, setParticipants] = useState(item.participants);
    const month = String((date.getMonth()+1)).padStart(2, 0);
    const day = String((date.getDate())).padStart(2, 0);
    const dateStr = `${date.getFullYear()}-${month}-${day}`;

    const deleteItem = (e) => {
        delFromCart(item.id);
    }

    const saveItem = (e) => {
        const res = await fetch(`/api/cart/${listing.id}`, {
            method: 'PATCH',
            body: JSON.stringify({date, participants})
        })
        setListing(res.data.Listing)
    }

    return (
        <div className="horizontal-listing">
            <div className="photo-holder">
                <img className="listing-photo" src={listing.photo} alt={listing.title}/>
            </div>
            <div className="listing-info">
                <div className="title">
                    <NavLink to={`listings/${listing.id}`}>
                        <h2>{listing.title}</h2>
                    </NavLink>
                </div>
                <p>Sold by {seller.username}</p>
                <div className="booking">
                    <label htmlFor="guests">Number of Guests:</label>
                    <input id="num-guests" type="number" value={participants} onChange={e => setParticipants(e.target.value)}/>
                    <label htmlFor="date">On:</label>
                    <input id="date" type="date" value={dateStr} onChange={e => setDate(new Date(e.target.value))}/>
                </div>
                <p>${(listing.priceCents/100).toFixed(2)} Each</p>
                <div className="button-holder">
                    <i className="fas fa-trash" onClick={deleteItem}></i>
                    <i className="far fa-save" onClick={saveItem}></i>
                </div>

            </div>
        </div>
    );
}

export default Item;
