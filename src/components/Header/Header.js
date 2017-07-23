import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import css from './Header.css';


const Header = (props)  => {
    // console.log(props);
  return (
    <div className="header">
      <h1>Teen Scene</h1>
      <SearchContainer/>
    </div>
  )
}

export default Header;
