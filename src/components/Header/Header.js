import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import css from './Header.css';


const Header = ()  => {

  return (
    <div className="Header">
      <h1>Teen Scene</h1>
      <SearchContainer/>
    </div>
  )
}

export default Header;
