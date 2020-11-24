import React, {useState} from "react";
// import { fetch } from "../../store/csrf"

const SearchBar = () => {
    const [str, setStr] = useState("");
    const search = (e) => {
        e.preventDefault();

    }
    return (
        <form className="search" onSubmit={search}>
            <input className="search-input"type="text" value={str} onChange={e => setStr(e.target.value)}/>
            <i onClick={search}className="fas fa-search"></i>
        </form>
    );
}

export default SearchBar;
