import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{

  return (
    <>
      <header className='header'>
        <div className="container">
          <div className='navbar'>
            <NavLink to='/'className='navbar-logo'></NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
