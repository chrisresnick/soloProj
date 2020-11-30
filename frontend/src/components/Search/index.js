import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Result from "./searchResult";
import {fetch} from "../../store/csrf";
import "./search.css"

const Search = () => {

    const searchTerm = useSelector(state => state.search.searchTerm);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (async () => {
            const res = await fetch("/api/search", {
                method: "POST",
                body: JSON.stringify({searchTerm})
            })
            //console.log(res)
            setResults(res.data);
            //console.log(results);
            setLoading(false);
        })()
    }, [searchTerm])
    let loadingDisp = loading ? (<h1>Loading...</h1>) : null;
    return (
        <div className="searchResult-holder">
            {loadingDisp}
            {results.map(result => <Result key={`${result.id}-${searchTerm}`} listing={result}/>)}
            <h1>{results.length === 0 ? "No results found." : null}</h1>
        </div>
    )
}

export default Search;
