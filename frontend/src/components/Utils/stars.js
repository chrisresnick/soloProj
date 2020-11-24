import React from "react";

const Start = ({rating, userId}) => {
    const fullStar = "fas fa-star"
    const halfStar = "fas fa-star-half-alt"
    const noStar = "far fa-star"
    const range = [];
    for(let num = 0; num <=5; n++) range.push(num);
    return (
        <div className="star-holder">
            {/* {range.map(n => rating < n ? noStar : (rating < n+1 ? halfStar : fullStar))} */}
            {range.map((n) => (
                <i
                    className={rating < n ? noStar : (rating < n+1 ? halfStar : fullStar)}
                    key={`${userId}-${n}`}
                >

                </i>))}
        </div>
    )
}
