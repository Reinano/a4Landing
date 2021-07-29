import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () =>{
  // const [click, setClick] = useState(false);
  //
  // const handleClick = () => setClick(!click);
  // // its for mobile burger-menu



  return (
    <>
      <header className='header'>
        <div className="container">
          <nav className='navbar'>
            <div className="navbar__logo">
              <NavLink to='/'className='logo'></NavLink>
            </div>
            <ul className="nav__menu">
              <li className="nav__list"><Link to='/about' className='nav__link'>About</Link></li>
              <li className="nav__list"><Link to='/offer' className='nav__link'>We offer</Link></li>
              <li className="nav__list"><Link to='/tokenomiks' className='nav__link'>Tokenomics</Link></li>
              <li className="nav__list"><Link to='/roadmap' className='nav__link'>RoadMap</Link></li>
              <li className="nav__list"><Link to='/social' className='nav__link'>Social</Link></li>
            </ul>
            <button className="buttonLanguage">
              <img src="./../../../../src/img/flagicon.svg" alt="flagicon"/>
              <a href="" className="buttonLanguage__item">Russian</a>
              <img src="./../../../../src/img/strelka.svg"></img>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
