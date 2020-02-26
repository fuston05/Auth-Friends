import React from 'react';
import {Link} from 'react-router-dom';

//styles
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to= '/login'>Sign In</Link></li>
        <li><Link to= '/friends'>Friends</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;