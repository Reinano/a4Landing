import React from 'react';
import aboutA4icon from '../../../../src/img/aboutA4.svg';
import {_t} from "../common/translator";
const About = () => {

  return(
    <div className="about__background">
        <div className="container">
          <div className="about__background_imgOne"></div>
          <div className="about__background_imgTwo"></div>
          <section className="about">
            <span className='common__number common__number_pink'>
                01
            </span>
            <h2 className="about__title">{_t('about-title-dark')}<span>{_t('about-title-fade')}</span></h2>
            <div className="about__items">
              <p className="about__item">{_t('about-item-1-1')}<strong>{_t('about-item-1-2')}</strong>{_t('about-item-1-3')}</p>
              <p className="about__item">{_t('about-item-2-1')}<strong>{_t('about-item-2-2')}</strong>{_t('about-item-2-3')}</p>
              <p className="about__item">{_t('about-item-3-1')}<strong>{_t('about-item-3-2')}</strong>{_t('about-item-3-3')}</p>
            </div>

            <div className="about__links">
              <div className="about__linksItem">
                <a href="https://bscscan.com/token/0x7df1b4de6e770fc48088c1ee7b14d0b41fb7931b?a=0x87747d03e1faf4034e31ac756b33a98f99b94c2e" className="about__link">
                  A4
                  <img src={aboutA4icon} alt=""/>
                </a>
                <p>Token Ticker:</p>
              </div>

              <div className="about__linksItem">
                <a href="https://bscscan.com/token/0x7df1b4de6e770fc48088c1ee7b14d0b41fb7931b?a=0x87747d03e1faf4034e31ac756b33a98f99b94c2e" className="about__link">
                  0x7df1b4de6e770fc48088c1ee7b14d0b41fb7931b
                  <img src={aboutA4icon} alt=""/>
                </a>
                <p>Contract Address:</p>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}

export default About;
