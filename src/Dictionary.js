import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState ("fun");
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] = useState (null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);

    }

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);


        let pexelsApiKey = "563492ad6f9170000100000175b989bf7b4d4a618b532f1fcfcff1ab";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search(); 
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();

    }

    if (loaded){
        return (
        <div className="dictionary">
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} defaultValue={keyword}/>
                </form>
                <div className="hint">
                    <i class="fas fa-pencil-alt"></i>
                    suggested words: learn, coding, create, fun...
                </div>
            <Results results={results}/>
            <Photos photos={photos}/>
        </div>);

    } else {
        load();
        return "Loading";
    }

    
}