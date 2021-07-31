import React from 'react';
import {scrollToTop} from "../common/scroll";
import {Link} from "react-router-dom";
import {_t} from "../common/translator";
const Footer = () => {

  return (
    <>
     <div className='container'>
        <div className='footer'>
            <div className='footer__column'>
                <div className='footer__logo footer__logo_purple'> </div>
                <div className='footer__description'>
                    <span className='footer__description_bold'>Binance Smart Chain</span><br/>
                    Leveraged Farming Made Easy With A4 Tokens.
                </div>
            </div>
            <div className='footer__column'>
               <ul className='footer__navigationList'>
                   <li>
                       <a>{_t('nav-about')}</a>
                   </li>
                   <li>
                       <a>{_t('nav-offer')}</a>
                   </li>
                   <li>
                       <a>{_t('nav-tokenomics')}</a>
                   </li>
                   <li>
                       <a>{_t('nav-roadmap')}</a>
                   </li>
                   <li>
                       <a>{_t('nav-social')}</a>
                   </li>
               </ul>
            </div>
            <div className='footer__column'>
                <div className='footer__row'>
                    <div className="footer__downloadLinks">
                        <div className='footer__appStore'> </div>
                        <div className='footer__googlePlay'> </div>
                    </div>
                    <Link className='footer__scrollToTop' onClick={scrollToTop()}> </Link>
                </div>
                <p className='footer__legalInformation'>
                    {_t('footer-license')}
                </p>
            </div>
        </div>
     </div>
    </>
  );
}

export default Footer;
