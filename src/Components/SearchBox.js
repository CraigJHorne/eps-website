import React from 'react';
import '../Components/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


function SearchBox() {



  return (

          <div className="header__search">
            <input type="search" className="header__searchInput" placeholder="Search for products"/>
            <SearchIcon className="header__searchIcon" />
          </div>

  );
}

export default SearchBox;
