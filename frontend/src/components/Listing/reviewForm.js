import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {fetch} from "../../store/csrf";
import StarSetter from "../Utils/starSetter";
import starSetter from "../Utils/starSetter";

const ReviewForm = ({sellerId, setShow, setNewReview}) => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(1);
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    if(!user){
        history.push("/login");
    }

    const submit = async (e) => {
        const res = await fetch("/api/reviews", {
            method: "POST",
            body: JSON.stringify({
                fromUser: user.id,
                forUser: sellerId,
                review,
                rating
            })
        });
        if(res.data.done){
            setShow(true);
            setNewReview(true);
        }

    }

    return (
        <div className="reviewForm-holder">
                <textarea id="review" placeholder="Type your review here!!" value={review} onChange={e=>setReview(e.target.value)}/>
                <div className="select-holder">
                    <label htmlFor="review-rating">Rating:</label>
                    <StarSetter rating={rating} setRating={setRating} id="review-rating" />
                </div>
                <button onClick={submit}>Submit Review</button>
        </div>
    );
};

export default ReviewForm;
