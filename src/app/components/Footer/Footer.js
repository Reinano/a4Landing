import React from 'react';
import {scrollToTop} from "../common/scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {_t} from "../common/translator";
const Footer = () => {

  return (
    <>
      <footer className="footer">
       <div className='container'>
          <div className='footerInner'>
              <div className='footer__column footer__column_first'>
                  <div className='footer__logo footer__logo_purple'> </div>
                  <div className='footer__description'>
                      <span className='footer__description_bold'>Binance Smart Chain</span><br/>
                      Leveraged Farming Made Easy With A4 Tokens.
                  </div>
              </div>

              <Link to='header' smooth={true} className='footer__mobileScrollToTop'> </Link>

              <div className='footer__column footer__column_second'>
                 <ul className='footer__navigationList'>
                    <li>
                        <Link to='about' smooth={true}>{_t('nav-about')}</Link>
                   </li>
                   <li>
                       <Link to='benefits' smooth={true}>{_t('nav-offer')}</Link>
                   </li>
                   <li>
                       <Link to='tokenomics' smooth={true}>{_t('nav-tokenomics')}</Link>
                   </li>
                   <li>
                       <Link to='roadmap' smooth={true}>{_t('nav-roadmap')}</Link>
                   </li>
                   <li>
                       <Link to='social' smooth={true}>{_t('nav-social')}</Link>
                   </li>
                 </ul>
              </div>
              <div className='footer__column footer__column_third'>
                  <div className='footer__row'>
                      <div className="footer__downloadLinks">
                          <div className='footer__appStore'> </div>
                          <div className='footer__googlePlay'> </div>
                      </div>

                      <Link to='header' smooth={true} className='footer__scrollToTop'> </Link>

                  </div>
                  <p className='footer__legalInformation'>
                      {_t('footer-license')}
                  </p>
              </div>
              <p className='footer__legalInformationForMobileScreen'>
                  {_t('footer-license')}
              </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
