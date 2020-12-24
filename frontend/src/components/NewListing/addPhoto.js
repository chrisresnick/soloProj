import React, {useState} from "react";
import {fetch as csrfFetch} from "../../store/csrf";
import axios from "axios";

const AddPhoto = () => {
    const [file, setFile] = useState(null)

    const fileChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const uploadPhoto = async (e) => {
        e.preventDefault();
        const res1 = await csrfFetch("/api/permisions/upload",{
            method: "POST",
        })
        if(res1.data.postUrl) {
            window.fetch(res1.data.postUrl,
                {
                    method: "PUT",
                    headers : {
                        "Content-Type": "image/jpeg",
                    },
                    body: file,
                })
        }
        else {
            console.log("Error fetching AWS signed URL")
        }

    }


    return (
        <div className="photo-uploader">
            <input type="file" onChange={fileChange}/>
            <button onClick={uploadPhoto}>Unload file</button>
        </div>

    )
}
export default AddPhoto;
