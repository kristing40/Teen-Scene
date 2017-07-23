import React from 'react';
import ReactDOM from 'react-dom';
import css from './Header.css';


const Header = (props)  => {
  return (
    <div className="header">
      {props.title}
    </div>
  )
}

export default Header;
