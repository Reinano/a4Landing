import React, {useState} from 'react';
import flagicon from '../../../../src/img/flagicon.svg';
import strelka from '../../../../src/img/strelka.svg';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {LanguageContext} from '../common/LanguageContext';
import {_t} from "../common/translator";


const LanguageSwitcher = () => {

    const { lang, toggleLang } = React.useContext(LanguageContext);

  return (
      <div className="nav__languageItem" onClick={toggleLang}>
        <img className={lang ? 'nav__languageItem_img' : 'nav__languageItem_imgNone'} src={flagicon} alt="flagicon"/>
        <button className="nav__languageItemBtn nav__languageItemBtn_bg">
          <div className="nav__languageItemBtn_text">{lang ? 'Russian' : 'English'}</div>
        </button>
        <img src={strelka} alt="strelka"/>
      </div>

  )
}

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const { lang, toggleLang } = React.useContext(LanguageContext);
  return (
    <>
      <header className='header'>
        <div className="container" name="top">
          <nav className={sidebar ? "nav nav__sidebar" : "nav"}>
            <div className="nav__logo nav__logo_purple">
              <Link to='top' smooth={true} className='nav__logo-link'> </Link>
            </div>
            <ul className="nav__menu">
              <li className="nav__list"><Link to='about' smooth={true} className='nav__link'>{_t('nav-about')}</Link></li>

              <li className="nav__list"><Link to='benefits' smooth={true} className='nav__link'>{_t('nav-offer')}</Link></li>

              <li className="nav__list"><Link to='tokenomics' smooth={true} className='nav__link'>{_t('nav-tokenomics')}</Link></li>
              <li className="nav__list"><Link to='roadmap' smooth={true} className='nav__link'>{_t('nav-roadmap')}</Link></li>
              <li className="nav__list"><Link to='social' smooth={true} className='nav__link'>{_t('nav-social')}</Link></li>
            </ul>
            <LanguageSwitcher/>
            <div className="navBurgerMenu">
              <div className={sidebar ? "navBurgerMenu__logo navBurgerMenu__logo_active" : "navBurgerMenu__logo"}></div>
              <input onClick={showSidebar} className="navBurgerMenu__toogle" id="navBurgerMenu__toogle" type="checkbox"/>
              <label className={sidebar ? "navBurgerMenu__button navBurgerMenu__button_active" : "navBurgerMenu__button"} htmlFor="navBurgerMenu__toogle">
                <span className={sidebar ? "navBurgerMenu__span navBurgerMenu__span_active" : "navBurgerMenu__span"}></span>
                <span className={sidebar ? "navBurgerMenu__spanCross navBurgerMenu__spanCross_active" : "navBurgerMenu__spanCross"}></span>
              </label>
              <ul className={sidebar ? "navBurgerMenu__box navBurgerMenu__box_active" : "navBurgerMenu__box"}>
                <li className="navBurgerMenu__list"><Link to='about' smooth={true} className='navBurgerMenu__link'>{_t('nav-about')}</Link></li>
                <li className="navBurgerMenu__list"><Link to='benefits' smooth={true} className='navBurgerMenu__link'>{_t('nav-offer')}</Link></li>
                <li className="navBurgerMenu__list"><Link to='tokenomics' smooth={true} className='navBurgerMenu__link'>{_t('nav-tokenomics')}</Link></li>
                <li className="navBurgerMenu__list"><Link to='roadmap' smooth={true} className='navBurgerMenu__link'>{_t('nav-roadmap')}</Link></li>
                <li className="navBurgerMenu__list"><Link to='social' smooth={true} className='navBurgerMenu__link'>{_t('nav-social')}</Link></li>
                <div className="navBurgerMenu__socialLinks">
                <Link to='#' smooth={true} className="navBurgerMenu__socialLink navBurgerMenu__socialLink_tg">
                  <span className="navBurgerMenu__socialLink_tg"></span>
                </Link>
                <Link to='#' smooth={true} className="navBurgerMenu__socialLink navBurgerMenu__link_instagram">
                  <span className="navBurgerMenu__socialLink_instagram"></span>
                </Link>
                <Link to='#' smooth={true} className="navBurgerMenu__socialLink navBurgerMenu__link_twitter">
                  <span className="navBurgerMenu__socialLink_twitter"></span>
                </Link>
                <Link to='#' smooth={true} className="navBurgerMenu__socialLink navBurgerMenu__link_toggleLang" onClick={toggleLang}>
                  <span className={lang ? "navBurgerMenu__socialLink_langRu" : "navBurgerMenu__socialLink_langEn"}>{lang ? "" : "En"}</span>
                </Link>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
