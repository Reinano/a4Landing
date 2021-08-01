import React from 'react';
import flagicon from '../../../../src/img/flagicon.svg';
import strelka from '../../../../src/img/strelka.svg';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {LanguageContext} from '../common/LanguageContext';
import {_t} from "../common/translator";


const LanguageSwitcher = () => {

    const { lang, toggleLang } = React.useContext(LanguageContext);

  return (
      <div className="nav__languageItem" onClick={toggleLang}>
        <img src={flagicon} alt="flagicon"/>
        <button className="nav__languageItemBtn nav__languageItemBtn_bg">
          <div className="nav__languageItemBtn_text">{lang ? 'Russian' : 'English'}</div>
        </button>
        <img src={strelka} alt="strelka"/>
      </div>

  )
}

const Navbar = () => {

    const { lang } = React.useContext(LanguageContext);
  return (
    <>
      <header className='header'>
        <div className="container" name="top">
          <nav className='nav'>
            <div className="nav__logo nav__logo_purple">
              <Link to='top' smooth={true} className='nav__logo-link'> </Link>
            </div>
            <ul className="nav__menu">
              <li className="nav__list"><Link to='about' smooth={true} className='nav__link'>{_t('nav-about')}</Link></li>
              <li className="nav__list"><Link to='offer' smooth={true} className='nav__link'>{_t('nav-offer')}r</Link></li>
              <li className="nav__list"><Link to='tokenomics' smooth={true} className='nav__link'>{_t('nav-tokenomics')}</Link></li>
              <li className="nav__list"><Link to='roadmap' smooth={true} className='nav__link'>{_t('nav-roadmap')}</Link></li>
              <li className="nav__list"><Link to='social' smooth={true} className='nav__link'>{_t('nav-social')}</Link></li>
            </ul>
            <LanguageSwitcher/>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
