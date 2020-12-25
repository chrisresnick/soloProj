import React, {useState} from "react";
import AddPhoto from "./addPhoto";
import PhotoDisplay from "./photoDisplay";
import "./newListing.css"

const NewListing = () => {
    const [listingName, setListingName] = useState("");
    const [listingDesription, setListingDescription] = useState("");
    const [price, setPrice] = useState("");
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [photos, setPhotos] = useState([]);

    const addToPhotos = (url) => {
        setPhotos([...photos, url])
    }

    const deletePhoto = (url) => {
        setPhotos(photos.filter(photo => photo != url));
    }

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
                    <div className="new-photos">
                        {photos.map(photo => <PhotoDisplay key={photo} photo={photo} deletePhoto={deletePhoto}/>)}
                    </div>
                    <AddPhoto addToPhotos={addToPhotos}/>
                </fieldset>
                <button className="submit-button">Add New Listing</button>

            </form>
        </div>
    )
}

export default NewListing;
