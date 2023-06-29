import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../store/product";
import { BsSearch } from 'react-icons/bs';
import { useHistory } from "react-router-dom";


const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearchResults(searchQuery))
        history.push(`/search/${searchQuery}`)
        setSearchQuery("")
    }

    return (
        <>
            <form className='search-container' onSubmit={handleSearch}>
                <input
                    className='searchbar'
                    type="text"
                    placeholder={"Search for anything"}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    <span className="search-icon"><BsSearch size={17} /></span>
                </button>
            </form>
        </>
    )
}

export default SearchBar
