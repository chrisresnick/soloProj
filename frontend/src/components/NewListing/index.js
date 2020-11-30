import React, {useState} from "react"
import ReactDom from "react-dom";
import * as requireActions from "../../store/require";
import {useDispatch, useSelector} from "react-redux";
import { set } from "js-cookie";

const NewListing = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [price, setPrice] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    return ReactDom.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={()=>dispatch(requireActions.setRequireCreate(false))}>
            </div>
            <div id="modal-content">
                <div class="create-form-holder">
                    <form class="create-form">
                        <input placeholder="title" value={} onChange={e => set(e.target.value)}/>
                        <input value={description} onChange={e => setDescription(e.target.value)}placeholder="description"/>
                        <input value={photo} onChange={e => setPhoto(e.target.value)} placeholder="photo url" />
                        <input value={price} onChange={e => setPrice(e.target.value)} placeholder="price"/>
                        <input value={lat} onChange={e => setLat(e.target.value)}placeholder="latitude"/>
                        <input value={long} onChange={e => setLong(e.target.value)} placeholder="longitude"/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewListing;
