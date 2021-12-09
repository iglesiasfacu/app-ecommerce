import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({setSearch}) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setSearch(inputValue);
            setInputValue('');
            this.props.history.Push('/');
        }
    }

    return ( 
        <form onSubmit={handleSubmit} className="search-bar">
            <input 
                type="text" 
                placeholder="Find all products"
                value={inputValue}
                onChange={handleInputChange}
            />
            <a onClick={handleSubmit} className="search-icon">
                <Link to={`/`}>
                    <i className="fas fa-search"></i>
                </Link>
            </a>
        </form>
     );
}
 
export default SearchBar;