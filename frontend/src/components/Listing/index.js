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
            setImgs([res.data.photo, ...res.data.ExtraPhotos]);
        })()
    }, [params])

    const adjustSelected = (num) =>  {
        let newSelected = selectedImg + num;
        if(newSelected < 0) newSelected = imgs.length-1;
        if(newSelected >= imgs.length) newSelected  = 0;
        setSelectedImg(newSelected);
        console.log(selectedImg);
    }

    return !loading && (
       <>
        <div className="disp">
            <div className="imgs">
                <div className ="imgHolder">
                    <i class="fas fa-chevron-up" onClick={() => adjustSelected(-1)}></i>
                    {imgs.map((imig, idx) => <img key={idx} onClick={() => setSelectedImg(idx)} src={imig} alt={listing.title}/>)}
                    <i class="fas fa-chevron-down" onClick={() => adjustSelected(1)}></i>
                </div>
                <div class="main-img-holder">
                    <i class="fas fa-chevron-left" onClick={() => adjustSelected(-1)}></i>
                    <img className="main-img" src={imgs[selectedImg]} alt={listing.title}/>
                    <i class="fas fa-chevron-right" onClick={() => adjustSelected(1)}></i>
                </div>

            </div>
            <div className="info">
                <h1>{listing.title}</h1>
                <p>{listing.description}</p>
                <p>${(listing.priceCents/100).toFixed(2)}</p>
            </div>
        </div>
       </>
    );
}

export default Listing;
