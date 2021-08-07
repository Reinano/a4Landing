import React from 'react';
import {_t} from "../common/translator";
import {LanguageContext} from "../common/LanguageContext";

const HeroScreen = () => {

  const { lang } = React.useContext(LanguageContext);

  return(
    <div className="heroscreen__background">
      <div className="container">
        <section className="heroscreen">
          <h1 className="heroscreen__header">
            {_t('hero-screen-heading', lang)}<span className='heroscreen__header_span'>A4 Tokens</span>
          </h1>
          <div className="heroscreen__description">
            <p>{_t('hero-screen-small-text', lang)}</p>
          </div>
          <div className="heroscreenStore">
            <div className="heroscreenStore__appStore"> </div>
            <div className="heroscreenStore__googlePlay"> </div>
          </div>

          <div className="heroscreen__background_img">

          </div>

          <div className="heroscreen__background_green"> </div>
        </section>
      </div>
    </div>
  );
}

export default HeroScreen;
