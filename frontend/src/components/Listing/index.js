import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { fetch } from "../../store/csrf"
import Calendar from 'react-calendar';
import Star from "../Utils/stars";
import Review from "./review";
import ReviewForm from "./reviewForm";
import 'react-calendar/dist/Calendar.css';
import "./listing.css";

const Listing = () => {
    const params = useParams();
    const [listing, setListing] = useState({});
    const [loading, setLoading] = useState(true);
    const [newReview, setNewReview] = useState(false);
    const [hideReviewFrom, setHideReviewFrom] = useState(true);
    const [imgs, setImgs] = useState([]);
    const [date, setDate] = useState(new Date());
    const [selectedImg, setSelectedImg] = useState(0);
    const [participants, setParticipants] = useState(1);
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    const form = hideReviewFrom ?
        (
        <div className="formBtn-holder">
            <button
                onClick={e => setHideReviewFrom(false)}>
                    Leave a Review
            </button>
        </div>) :
        <ReviewForm sellerId={listing.User.id} setShow={setHideReviewFrom} setNewReview={setNewReview}/>

    useEffect(()=> {
        (async () => {
            const res = await fetch(`/api/listings/${params.id}`)
            console.log(res);
            setListing(res.data);
            setLoading(false);
            setImgs([res.data.photo, ...res.data.ExtraPhotos]);
        })()
        setNewReview(false);
    }, [params, newReview])

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
            if(res.data.added){
                history.push("/cart");
            }
        } else {
            history.push("/login");
        }

    }

    return !loading && (
       <>
        <div className="disp">
            <div className="left-col">
                <div className="imgs">
                    <div className ="imgHolder">
                        <i className="fas fa-chevron-up" onClick={() => adjustSelected(-1)}></i>
                        {imgs.map((imig, idx) => <img key={idx} onMouseOver={() => setSelectedImg(idx)} src={imig} alt={listing.title}/>)}
                        <i className="fas fa-chevron-down" onClick={() => adjustSelected(1)}></i>
                    </div>
                    <div className="main-img-holder">
                        <i className="fas fa-chevron-left" onClick={() => adjustSelected(-1)}></i>
                        <img className="main-img" src={imgs[selectedImg]} alt={listing.title}/>
                        <i className="fas fa-chevron-right" onClick={() => adjustSelected(1)}></i>
                    </div>

                </div>
                {listing.User.received.map(review => <Review key={review.id}review={review}/>)}
                {form}
            </div>
            <div className="info">
                <h1>{listing.title}</h1>
                <div className="seller">
                    <p>Guide: <b>{listing.User.username}</b></p>
                    <Star rating={listing.User.rating} userId={listing.User.id}/>
                </div>
                <p>{listing.description}</p>
                <p>${(listing.priceCents/100).toFixed(2)}</p>
                <div className="form-holder">
                    <Calendar onChange={setDate} value={date}/>
                    <div className="guestsHolder">
                        <label htmlFor="guests">Number of Participants</label>
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
