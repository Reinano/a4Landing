import React from 'react';
import stakingIcon from '../../../../src/img/stakingIcon.svg';
import liquiditypoolIcon from '../../../../src/img/liquiditypoolIcon.svg';
import swapExternalIcon from '../../../../src/img/swapExternalIcon.svg';
import linkIcon from '../../../../src/img/aboutA4.svg';
import {_t} from "../common/translator";



const ExternalResource = () => {


  return (
    <>
      <section className="externalResourse">
        <div className="externalResourse_bg"></div>
        <div className="container">
          <div className="externalResourseInner">
            <div className="externalResourse__item externalResourse__item_one">
              <span className='common__number common__number_pink'>
                  03
              </span>
              <h2 className="externalResourse__title">{_t('externalResourse-title')}</h2>
              <a href="https://pancakeswap.finance/" target="_blank" className="externalResourse__link">
                <img src={linkIcon} alt="linkIcon"/>
                {_t('externalResourse-link')}
              </a>
            </div>
            <div className="externalResourse__item externalResourse__card">
              <div className="externalResourse__cardItem externalResourse__cardItem_first">
                <div><img src={swapExternalIcon} alt="stakingIcon"/></div>
                <p>{_t('externalResourse-swap')}</p>
              </div>
              <div className="externalResourse__cardItem externalResourse__cardItem_second">
                <div><img src={liquiditypoolIcon} alt="liquiditypoolIcon"/></div>
                <p>{_t('externalResourse-liquidity')}</p>
              </div>
              <div className="externalResourse__cardItem externalResourse__cardItem_third">
                <div><img src={stakingIcon} alt="swapExternalIcon"/></div>
                <p>{_t('externalResourse-staking')}</p>
              </div>
              <div className="externalResourse__card_bgPurple"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExternalResource;
