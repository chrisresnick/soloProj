import React from "react";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { fetch } from "../../store/csrf"
import "./listing.css";

const Listing = () => {
    const params = useParams();
    const [listing, setListing] = useState({});
    const [loading, setLoading] = useState(true);
    const [imgs, setImgs] = useState([]);
    const [selectedImg, setSelectedImg] = useState(0);

    useEffect(()=> {
        (async () => {
            const res = await fetch(`/api/listings/${params.id}`)
            console.log(res);
            setListing(res.data);
            setLoading(false);
            setImgs([res.data.photo]);
        })()
    }, [params])

    return !loading && (
       <>
        <div className="disp">
            <div className="imgs">
                <div className ="imgHolder">
                    {imgs.map((imig, idx) => <img key={idx} onClick={() => setSelectedImg(idx)} src={imig} alt={listing.title}/>)}
                </div>
                <img className="main-img" src={imgs[selectedImg]} alt={listing.title}/>
            </div>
            <div className="info">
                <h1>{listing.title}</h1>
                <p>{listing.description}</p>
                <p>${listing.priceCents/100}</p>
            </div>
        </div>
       </>
    );
}

export default Listing;
