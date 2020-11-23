import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { fetch } from "../../store/csrf"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./listing.css";

const Listing = () => {
    const params = useParams();
    const [listing, setListing] = useState({});
    const [loading, setLoading] = useState(true);
    const [imgs, setImgs] = useState([]);
    const [date, setDate] = useState(new Date());
    const [selectedImg, setSelectedImg] = useState(0);
    const [participants, setParticipants] = useState(1);
    const history = useHistory();
    const user = useSelector(state => state.session.user)

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

    const addToCart = async (e) => {
        if(user){
            const res = await fetch("/api/cart", {
                method: "POST",
                body: JSON.stringify({
                    listing: params.id,
                    date,
                    participants,
                    user: user.id
                })
            })
            console.log(res);
            if(res.data.added){
                console.log("hit");
                history.push("/cart");
            }

        }

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
                <div class="form-holder">
                    <Calendar onChange={setDate} value={date}/>
                    <div className="guestsHolder">
                        <label HTMLfor="guests">Number of Participants</label>
                        <input id="guests" type="number" value={participants} onChange={e => setParticipants(e.target.value)} />
                    </div>
                    <button className="add-to-cart" onClick={addToCart}>Add Trip to Cart</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default Listing;
