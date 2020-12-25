import React, {useState} from "react";
import {fetch as csrfFetch} from "../../store/csrf";
import axios from "axios";

const AddPhoto = () => {
    const [file, setFile] = useState(null)
    const [errors, setErrors] = useState([])

    const fileChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const uploadPhoto = async (e) => {
        e.preventDefault();
        const res1 = await csrfFetch("/api/permisions/upload",{
            method: "POST",
            body: JSON.stringify({filetype: file.type})
        })
        if(res1.data.postUrl) {
            setErrors([]);
            window.fetch(res1.data.postUrl,
                {
                    method: "PUT",
                    headers : {
                        "Content-Type": file.type,
                    },
                    body: file,
                })
        }
        else if (res1.data.error) {
            setErrors([res1.data.error]);
        }

    }


    return (
        <div className="photo-uploader">
            {errors.map(error => <h4 key={error} className="photo-error">{`Error: ${error}`}</h4>)}
            <div className="photo-buttons">
                <input type="file" onChange={fileChange}/>
                <button onClick={uploadPhoto}>Unload file</button>
            </div>
        </div>

    )
}
export default AddPhoto;
