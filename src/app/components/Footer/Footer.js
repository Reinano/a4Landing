import React from 'react';

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
                    <div className='footer__scrollToTop'> </div>
                </div>
                <p className='footer__legalInformation'>
                    Vauban is a trading name of Vauban Technologies Limited, a company
                    incorporated in England and Wales (11128704) with Registered Office and Business address at 1 Frederick's Place, London EC2R 8AE, United Kingdom.
                </p>
            </div>
        </div>
     </div>
    </>
  );
}

export default Footer;
