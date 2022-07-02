import React from 'react';
import './SearchBar.css';
import searchicon from './searchIcon.svg'

const SearchBar = ({searchText, setSearchText}) => {
    return (
        <div className="search-bar">
            <img src={ searchicon } alt=""/>
            <input 
                className="search-input"
                type="text" placeholder="Enter restaurant name..."
                value={ searchText }
                onChange={ e=>setSearchText(e.target.value) }
            />
        </div>
    );
};

export default SearchBar