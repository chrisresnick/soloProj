import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {useHistory} from "react-router-dom";


const Map = ({coords}) => {

    const history = useHistory();

    const center = { lat: 39.8283, lng: -98.5795 }
    const containerStyle = {
        width: '75vw',
        height: '75vh'
    };

    return (
        <LoadScript googleMapsApiKey={"AIzaSyB7RL1VTdvSotBJ1RO6ZpHzQkb1jcnjTxA"}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={4}
                mapTypeId="satellite"
            >
                {coords.map(coord => (
                <Marker key={coord.id}
                    position={{lat:coord.latitude, lng:coord.longitude}}
                    onClick={(e) => history.push(`/listings/${coord.listingId}`)}
                />))}
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
