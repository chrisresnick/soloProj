import React, {useState} from "react";
import {fetch as csrfFetch} from "../../store/csrf";

const AddPhoto = ({addToPhotos}) => {
    const [file, setFile] = useState(null)
    const [errors, setErrors] = useState([])

    const uploadPhoto = async (e) => {
        e.preventDefault();
        if(file == null){
            setErrors(["Choose a file"]);
            return;
        }
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
                }
            ).then(d => {
                setFile(null);
                addToPhotos(res1.data.getUrl);
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
                <input type="file" files={[file]} onChange={e => setFile(e.target.files[0])}/>
                <button onClick={uploadPhoto}>Unload file</button>
            </div>
        </div>

    )
}
export default AddPhoto;
