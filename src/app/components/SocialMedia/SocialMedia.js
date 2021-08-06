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
                      07
                  </span>
                  <h2 className='common__h2'>
                      {_t('social-title')}
                  </h2>

                  <p className='common__par'>
                      <span className='common__par common__par_bold'>{_t('social-par-bold')}</span><br/>
                      {_t('social-par-fade')}
                  </p>

                  <div className='socialMedia__icons'>
                      <div className='socialMedia__icon socialMedia__icon_telegram'> </div>
                      <div className='socialMedia__icon socialMedia__icon_instagram'> </div>
                      <div className='socialMedia__icon socialMedia__icon_twitter'> </div>
                  </div>

                  <div className='socialMedia__background'> </div>
              </section>
            </div>
          </section>
      </>

  );
}

export default SocialMedia;
