import React from 'react';
import ReactDOM from 'react-dom';
import css from './Header.css';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';


const Header = (props)  => {
  return (
    <div className="header">
      <h1 className='header-title'>{props.title}</h1>
      <SearchContainer/>
    </div>
  )
}

export default Header;
