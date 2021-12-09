import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '@components/SearchBar/SearchBar';
import MainLogo from '../../assets/main-logo.png'
import './Header.css';

const Header = ( { setSearch } ) => {
    return ( 
        <>
            <nav className="navbar">
                <div className='main-logo'>
                    <Link to="/">
                        <img src={MainLogo}/>
                    </Link>
                </div>
                <SearchBar
                    setSearch = {setSearch}
                />
            </nav>
        </>
     );
}
 
export default Header;