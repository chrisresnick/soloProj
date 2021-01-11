import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import AddPhoto from "./addPhoto";
import PhotoDisplay from "./photoDisplay";
import {fetch} from "../../store/csrf";
import "./newListing.css";

const NewListing = () => {
    const [listingName, setListingName] = useState("");
    const [listingDescription, setListingDescription] = useState("");
    const [price, setPrice] = useState("");
    const [lat, setLat] = useState()
    const [long, setLong] = useState()
    const [photos, setPhotos] = useState([]);
    const [center, setCenter] = useState({ lat: 39.8283, lng: -98.5795 })
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    const containerStyle = {
        width: '100%',
        height: '60vh'
    };

    const addToPhotos = (url) => {
        setPhotos([...photos, url])
    }

    const deletePhoto = (url) => {
        setPhotos(photos.filter(photo => photo !== url));
    }

    const submit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/listings", {
            method: "PUT",
            body: JSON.stringify({
                listingName, listingDescription, price: price*100, lat, long, photos, user: user.id,
            })
        })
        if(res.data.errors){
            setErrors(res.data.errors);
            //console.log(errors);
        } else {
            setErrors([]);
        }
        if(res.data.id){
            history.push(`/listings/${res.data.id}`);
        }

    }

    return (
        <div className="new-listing-holder">
            <h1>Create New Listing</h1>
            {errors.length ? (
                <div className="submit-errors-holder">
                    {errors.map(err => <p key={err} className="error">{err}</p>)}
                </div>
            ) : null}

            <form className="new-listing-form" onSubmit={submit}>
                <input required="required" placeholder="Listing Name" value={listingName} onChange={e=>setListingName(e.target.value)}></input>
                <input required="required" placeholder="Price" type="number" value={price} onChange={e=>setPrice(e.target.value)}></input>
                <textarea required placeholder="Description" value={listingDescription} onChange={e=>setListingDescription(e.target.value)}></textarea>
                <fieldset className="coords">
                    <legend>Coordinates:</legend>
                    <div className="latLng">
                        <input placeholder="Latitude" required="required" disabled="disabled" value={lat} onChange={e=>setLat(e.target.value)}></input>
                        <input placeholder="Longitude" required="required" disabled="disabled" value={long} onChange={e=>setLong(e.target.value)}></input>
                        <LoadScript googleMapsApiKey={"AIzaSyB7RL1VTdvSotBJ1RO6ZpHzQkb1jcnjTxA"}>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={4}
                                onClick={e => {setLat(e.latLng.lat()); setLong(e.latLng.lng()); setCenter({lat, lng:long})}}
                                mapTypeId="satellite">
                                    {lat && long && <Marker position={{lat, lng:long}}/>}
                            </GoogleMap>
                        </LoadScript>
                    </div>
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
