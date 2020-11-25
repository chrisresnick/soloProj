import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Result from "./searchResult";
import {fetch} from "../../store/csrf";

const Search = () => {

    const searchTerm = useSelector(state => state.search.searchTerm);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (async () => {
            const res = await fetch("/api/search", {
                method: "POST",
                body: JSON.stringify(searchTerm)
            })
            setResults(res.data);
            setLoading(false);
        })()
    }, [searchTerm])
    let loadingDisp = loading ? (<h1>Loading...</h1>) : null;
    return (
        <div className="searchResult-holder">
            {loadingDisp}
            <h1>{searchTerm}</h1>
            {results.map(result => <Result key={result.id} listing={result}/>)}
        </div>
    )
}

export default Search;
