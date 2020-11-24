import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {fetch} from "../../store/csrf";

const ReviewForm = ({sellerId, setShow, setNewReview}) => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(5);
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    if(!user){
        history.push("/login");
    }

    const submit = async (e) => {
        const res = await fetch("/api/review", {
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
                    <select id="review-rating" value={rating} onChange={e => setRating(e.target.value)}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button onClick={submit}>Submit Review</button>
        </div>
    );
};

export default ReviewForm;
