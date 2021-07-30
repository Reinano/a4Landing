import React from 'react';
import aboutA4icon from '../../../../src/img/aboutA4.svg';

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
            <h2 className="about__title">A4 is a lending protocol that allows you to increase your profitability <span>by leveraging funds on the Binance Smart Chain.</span></h2>
            <div className="about__items">
              <p className="about__item">The protocol enables lenders to receive <strong>secure and stable income</strong> from cryptocurrency loans.</p>
              <p className="about__item">Borrowers, in turn, <strong>can obtain loans</strong> to improve the efficiency of their activities.</p>
              <p className="about__item">A4 will act as a <strong>regulator and guarantor</strong> of the transparency of the transaction.</p>
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
