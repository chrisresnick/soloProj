import React, {useState} from "react";
import * as searchActions from "../../store/search";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [str, setStr] = useState("");
    const search = (e) => {
        e.preventDefault();
        dispatch(searchActions.setSearch(str))
        history.push("/search");
    }
    return (
        <form className="search" onSubmit={search}>
            <input className="search-input"type="text" value={str} onChange={e => setStr(e.target.value)}/>
            <i onClick={search}className="fas fa-search"></i>
        </form>
    );
}

export default SearchBar;
