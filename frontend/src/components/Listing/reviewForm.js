import React, {useState} from "react";
import {fetch} from "../../store/csrf";

const ReviewForm = () => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(5);

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
                <button>Submit Review</button>
        </div>
    );
};

export default ReviewForm;
