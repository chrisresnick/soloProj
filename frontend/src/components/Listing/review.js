import React from "react";
import Stars from "../Utils/stars";

const Review = ({review}) => {
    return (
    <div className="review-holder">
        <div className="review-top">
            <p>Review by <b>{review.author.username}</b></p>
            <Stars rating={review.rating} userId={review.author.userId}/>
        </div>
        <p>{review.review}</p>
    </div>
    );

}

export default Review;
