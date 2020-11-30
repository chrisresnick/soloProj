import React, {useState, useEffect} from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow,} from '@react-google-maps/api';
import {useHistory, NavLink} from "react-router-dom";


const Map = ({coords}) => {

    const history = useHistory();
    const [infoBoxes, setInfoBoxes] = useState({});
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const iBoxObj = {};
        coords.forEach(coord => {
            iBoxObj[coord.id] = (
            <InfoWindow key={coord.id} position={{lat:coord.latitude, lng:coord.longitude}}>
                <div className="infobox-info">
                    <h2 className="infobox-title">
                        <NavLink to={`/listings/${coord.Listing.id}`}>{coord.Listing.title}</NavLink>
                    </h2>
                    <img className="infobox-photo" src={coord.Listing.photo} alt={coord.Listing.title}/>
                </div>
            </InfoWindow>)
        })
        setInfoBoxes(iBoxObj);
    }, [coords]);

    const center = { lat: 39.8283, lng: -98.5795 }
    const containerStyle = {
        width: '100%',
        height: '91vh'
    };

    return (
        <LoadScript googleMapsApiKey={"AIzaSyB7RL1VTdvSotBJ1RO6ZpHzQkb1jcnjTxA"}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={4}
                mapTypeId="satellite">
                <>
                {selected}
                {coords.map(coord => (
                <Marker key={coord.id}
                    position={{lat:coord.latitude, lng:coord.longitude}}
                    onClick={(e) => history.push(`/listings/${coord.listingId}`)}
                    onMouseOver={(e) =>  setSelected(infoBoxes[coord.id])}
                />))}
                </>
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
