import React from "react";
import { GoogleMap, LoadScript, useGoogleMap } from '@react-google-maps/api';

const Map = (props) => {
    const map = useGoogleMap();

    const center = { lat: 39.8283, lng: -98.5795 }
    const containerStyle = {
        width: '60vw',
        height: '60vh'
    };



    return (
        <LoadScript googleMapsApiKey={"AIzaSyB7RL1VTdvSotBJ1RO6ZpHzQkb1jcnjTxA"}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={4}
            >
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
