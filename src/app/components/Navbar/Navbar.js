import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
  // const [click, setClick] = useState(false);
  //
  // const handleClick = () => setClick(!click);
  // // its for mobile burger-menu



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
