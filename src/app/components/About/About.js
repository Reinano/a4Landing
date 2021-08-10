import React from 'react';
import aboutA4icon from '../../../../src/img/aboutA4.svg';
import transparensyAboutIcon from '../../../../src/img/transparensyAboutIcon.svg';
import improveAboutIcon from '../../../../src/img/improveAboutIcon.svg';
import plusspot from '../../../../src/img/plus_spot.svg';


import {_t} from "../common/translator";
const About = () => {

  return(
    <section className="about__background relative">
        <div className="about__background_imgOne"></div>
        <div className="about__background_common about__background_imgTwo">
          <div><img src={transparensyAboutIcon} alt="transparensyAboutIcon"/></div>
          <p><span>Transparency</span><br/> of the transactions</p>
        </div>
        <div className="about__background_common about__background_imgThree">
          <div><img src={improveAboutIcon} alt="improveAboutIcon"/></div>
          <p><span>Improve</span><br/>he efficiency</p>
        </div>
        <div className="about__background_ball">

        </div>
        <div className="container">
          <section className="about">
            <span className='common__number common__number_pink'>
                01
            </span>
            <h2 className="about__title">{_t('about-title-dark')}<span className="about__title_span">{_t('about-title-fade')}</span></h2>
            <div className="about__items">
              <p className="about__item">
                <div className="about__item_icon">

                </div>
                {_t('about-item-1-1')}<b>{_t('about-item-1-2')}</b>{_t('about-item-1-3')}
              </p>
              <p className="about__item">
                <div className="about__item_icon">

                </div>
                {_t('about-item-2-1')}<b>{_t('about-item-2-2')}</b>{_t('about-item-2-3')}
              </p>
              <p className="about__item">
                <div className="about__item_icon">

                </div>
                {_t('about-item-3-1')}<b>{_t('about-item-3-2')}</b>{_t('about-item-3-3')}
              </p>
            </div>

            <div className="about__links">
              <div className="about__linksItem">
                <div className="about__links_mobileicon"></div>
                <a href="https://bscscan.com/token/0x7df1b4de6e770fc48088c1ee7b14d0b41fb7931b?a=0x87747d03e1faf4034e31ac756b33a98f99b94c2e" target="_blank" className="about__link">
                  A4
                  <img src={aboutA4icon} alt=""/>
                </a>
                <p>{_t('token-ticker')}</p>
              </div>
              <div className="about__linksItem">
                <div className="about__links_mobileicon"></div>
                <a href="https://bscscan.com/token/0x7df1b4de6e770fc48088c1ee7b14d0b41fb7931b?a=0x87747d03e1faf4034e31ac756b33a98f99b94c2e" className="about__link">
                  0x7df1b4de6e770fc48088c1ee7b14d0b41fb7931b
                  <img src={aboutA4icon} alt=""/>
                </a>
                <p>{_t('contact-address')}</p>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}

export default About;
