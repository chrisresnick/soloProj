import React from "react"

const PhotoDisplay = ({photo, deletePhoto}) => {
    return (
        <div className="one-new-photo">
            <img alt="User Uploaded Photo" src={photo}/>
            <button onClick={e => {e.preventDefault(); deletePhoto(photo);}}>Delete Photo</button>
        </div>
    )
}

export default PhotoDisplay;
