import React, {useEffect, useState} from "react"
import Map from "./map"
import {fetch} from "../../store/csrf";
import "./style.css"


const Home = () => {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        (async () => {
            const {data} = await fetch("api/coords/");
            setListings(data);
        })()
    }, []);

    return (
        <div className="home-holder">
            <Map listings={listings}/>
        </div>
    );
}

export default Home;
