import React from 'react';

//components
import Nav from './Nav/Nav';

//styles
import './Header.scss'

const Header = () => {
  return (
    <div className= 'headerCont'>
      <Nav />
    </div>
  )
}

export default Header;