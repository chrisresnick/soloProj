import React, {useState} from "react";
import "./newListing.css"

const NewListing = () => {
    const [listingName, setListingName] = useState("");
    const [listingDesription, setListingDescription] = useState("");
    const [price, setPrice] = useState("");
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    return (
        <div className="new-listing-holder">
            <h1>Create New Listing</h1>
            <form className="new-listing-form">
                <input placeholder="Listing Name" value={listingName} onChange={e=>setListingName(e.target.value)}></input>
                <input placeholder="Price" type="number" value={price} onChange={e=>setPrice(e.target.value)}></input>
                <textarea placeholder="Description" value={listingDesription} onChange={e=>setListingDescription(e.target.value)}></textarea>
                <fieldset className="coords">
                    <legend>Coordinates:</legend>
                    <input placeholder="Latitude" value={lat} onChange={e=>setLat(e.target.value)}></input>
                    <input placeholder="Longitude" value={long} onChange={e=>setLong(e.target.value)}></input>
                </fieldset>
                <fieldset className="new-listing-photos">
                    <legend>Photos:</legend>
                </fieldset>
                <button className="submit-button">Add New Listing</button>

            </form>
        </div>
    )
}

export default NewListing;
