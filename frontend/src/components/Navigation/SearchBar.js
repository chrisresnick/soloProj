import React, {useState} from "react";
// import { fetch } from "../../store/csrf"

const SearchBar = () => {
    const [str, setStr] = useState("");
    const search = (e) => {

    }
    return (
        <div className="search">
            <input className="search-input"type="text" value={str} onChange={e => setStr(e.target.value)}/>
            <button className="search-button" onClick={search}><i class="fas fa-search"></i></button>
        </div>
    );
}

export default SearchBar;
