import React from 'react';
import {_t} from "../common/translator";

const SocialMedia = () => {

  return (
      <>
          <div className='socialMedia__topStripe'> </div>
          <section className="socialMedia">
            <div className="container">
              <section className='socialMedia__container' name='social'>

                  <span className='common__number'>
                      08
                  </span>
                  <h2 className='common__h2'>
                      {_t('social-title')}
                  </h2>

                  <p className='common__par'>
                      {_t('social-par-bold')}<br/>
                      {_t('social-par-fade')}
                  </p>

                  <div className='socialMedia__icons'>
                      <a className='socialMedia__icon socialMedia__icon_telegram' href="#"> </a>
                      <a className='socialMedia__icon socialMedia__icon_instagram' href="#"> </a>
                      <a className='socialMedia__icon socialMedia__icon_twitter' href="#"> </a>
                  </div>

                  <div className='socialMedia__background'> </div>
              </section>
            </div>
          </section>
      </>

  );
}

export default SocialMedia;
