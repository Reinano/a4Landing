import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import flagicon from '../../../../src/img/flagicon.svg';
import strelka from '../../../../src/img/strelka.svg';

const Navbar = () =>{
  // const [click, setClick] = useState(false);
  //
  // const handleClick = () => setClick(!click);
  // // its for mobile burger-menu



  return (
    <>
      <div className="container">
        <header className='header'>
          <nav className='nav'>
            <div className="nav__logo nav__logo_purple">
              <NavLink to='/'className='nav__logo-link'></NavLink>
            </div>
            <ul className="nav__menu">
              <li className="nav__list"><Link to='/about' className='nav__link'>About</Link></li>
              <li className="nav__list"><Link to='/offer' className='nav__link'>We offer</Link></li>
              <li className="nav__list"><Link to='/tokenomiks' className='nav__link'>Tokenomics</Link></li>
              <li className="nav__list"><Link to='/roadmap' className='nav__link'>RoadMap</Link></li>
              <li className="nav__list"><Link to='/social' className='nav__link'>Social</Link></li>
            </ul>
            <div className="nav__languageItem">
              <img src={flagicon} alt="flagicon"/>
              <button className="nav__languageItemBtn nav__languageItemBtn_bg">
                <a href="" className="nav__languageItemBtn_text">Russian</a>
              </button>
              <img src={strelka} alt="strelka"/>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
