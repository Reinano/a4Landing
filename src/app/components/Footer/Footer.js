import React from 'react';
import {scrollToTop} from "../common/scroll";
import {Link} from "react-router-dom";

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
                       <a>About</a>
                   </li>
                   <li>
                       <a>We offer</a>
                   </li>
                   <li>
                       <a>Tokenomics</a>
                   </li>
                   <li>
                       <a>RoadMap</a>
                   </li>
                   <li>
                       <a>Social</a>
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
                    Vauban is&nbsp;a&nbsp;trading name of&nbsp;Vauban Technologies Limited, a&nbsp;company
                    incorporated in&nbsp;England and Wales (11128704) with Registered Office and Business address at&nbsp;1&nbsp;Frederick&rsquo;s Place, London EC2R 8AE, United Kingdom.
                </p>
            </div>
        </div>
     </div>
    </>
  );
}

export default Footer;
