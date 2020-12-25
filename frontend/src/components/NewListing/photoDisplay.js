import React from "react"

const PhotoDisplay = ({photo}) => {
    return (
        <div className="one-new-photo">
            <img src={photo}/>
            <button>Delete Photo</button>
        </div>
    )
}

export default PhotoDisplay;
