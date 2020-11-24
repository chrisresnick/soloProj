import React from "react";
import "./stars.css";

const Star = ({rating, userId}) => {
    const fullStar = "fas fa-star fa-xs"
    const halfStar = "fas fa-star-half-alt fa-xs"
    const noStar = "far fa-star fa-xs"
    const range = [];
    for(let num = 1; num <=5; num++) range.push(num);
    return (
        <div className="star-holder">
            {/* {range.map(n => rating < n ? noStar : (rating < n+1 ? halfStar : fullStar))} */}
            {range.map((n) => (
                <i
                    className={rating > n ? fullStar : (rating > n-1 ? halfStar : noStar)}
                    key={`${userId}-${n}`}
                >

                </i>))}
        </div>
    )
}

export default Star;
