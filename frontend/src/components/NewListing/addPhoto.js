import React, {useState} from "react";
import {fetch as csrfFetch} from "../../store/csrf";

const AddPhoto = () => {
    const [file, setFile] = useState(null)

    const fileChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const uploadPhoto = async (e) => {
        e.preventDefualt();
        const res1 = await csrfFetch("/api/getPermision",{
            method: "POST"
        })
        if(res1.data.url) {
            console.log(res1.data.url)
        }
        else {
            console.log(res1)
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
