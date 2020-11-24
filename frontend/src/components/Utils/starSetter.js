import React from "react";
import "./stars.css";

const StarSetter = ({rating, setRating}) => {
    const fullStar = "fas fa-star fa-xs";
    const noStar = "far fa-star fa-xs";
    const range = [];
    for(let num = 1; num <=5; num++) range.push(num);
    return (
        <div className="starSetter-holder">
            {range.map(n => <i onMouseOver={e=> setRating(n)} className={n <= rating ? fullStar : noStar}/>)}
        </div>
    );
}

export default StarSetter;
