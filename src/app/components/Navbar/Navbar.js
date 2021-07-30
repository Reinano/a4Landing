import React from 'react';
import { NavLink } from 'react-router-dom';
import flagicon from '../../../../src/img/flagicon.svg';
import strelka from '../../../../src/img/strelka.svg';
import {scrollTo} from "../common/scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () =>{
  // const [click, setClick] = useState(false);
  //
  // const handleClick = () => setClick(!click);
  // // its for mobile burger-menu



  return (
    <>
      <section className="container" name='top'>
        <header className='header'>
          <nav className='nav'>
            <div className="nav__logo nav__logo_purple">
              <Link to='top' smooth={true} className='nav__logo-link'> </Link>
            </div>
            <ul className="nav__menu">
              <li className="nav__list"><Link to='about' smooth={true} className='nav__link'>About</Link></li>
              <li className="nav__list"><Link to='offer' smooth={true} className='nav__link'>We offer</Link></li>
              <li className="nav__list"><Link to='tokenomics' smooth={true} className='nav__link'>Tokenomics</Link></li>
              <li className="nav__list"><Link to='roadmap' smooth={true} className='nav__link'>RoadMap</Link></li>
              <li className="nav__list"><Link to='social' smooth={true} className='nav__link'>Social</Link></li>
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
      </section>
    </>
  );
};

export default Navbar;
