import React, { useState } from 'react';
import './SearchBar.css';
import searchicon from './searchIcon.svg'

const SearchBar = ({seachText, setSearchText}) => {
    return (
        <div className="search-bar">
            <img src={ searchicon }/>
            <input 
                className="search-input"
                type="text" placeholder="Enter food name..."
                value={ seachText }
                onChange={ e=>setSearchText(e.target.value) }
            />
        </div>
    );
};

export default SearchBar