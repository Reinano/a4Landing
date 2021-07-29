import React from 'react';

const SocialMedia = () => {

  return (
      <>
          <div className='socialMedia__topStripe'> </div>
          <div className='container socialMedia__container'>

              <span className='common__number'>
                  07
              </span>
              <h2 className='common__h2'>
                  Social networks
              </h2>

              <p className='common__par'>
                  <span className='common__par common__par_bold'>Follow the news and development of&nbsp;the project,</span><br/>
                  as&nbsp;well as&nbsp;participate in&nbsp;the life of&nbsp;the community<br/>
                  on&nbsp;our social networks
              </p>

              <div className='socialMedia__icons'>
                  <div className='socialMedia__icon socialMedia__icon_telegram'> </div>
                  <div className='socialMedia__icon socialMedia__icon_instagram'> </div>
                  <div className='socialMedia__icon socialMedia__icon_twitter'> </div>
              </div>

              <div className='socialMedia__background'> </div>
          </div>
      </>

  );
}

export default SocialMedia;
