import React from 'react';
import stakingIcon from '../../../../src/img/stakingIcon.svg';
import liquiditypoolIcon from '../../../../src/img/liquiditypoolIcon.svg';
import swapExternalIcon from '../../../../src/img/swapExternalIcon.svg';
import linkIcon from '../../../../src/img/aboutA4.svg';


const ExternalResource = () => {


  return (
    <>
      <section className="externalResourse">
        <div className="container">
          <div className="externalResourseInner">
            <div className="externalResourse__item externalResourse__item_one">
              <span className='common__number common__number_pink'>
                  03
              </span>
              <h2 className="externalResourse__title">Everything in one place</h2>
              <a href="https://pancakeswap.finance/" target="_blank" className="externalResourse__link">
                <img src={linkIcon} alt="linkIcon"/>
                Link
              </a>
            </div>
            <div className="externalResourse__item externalResourse__card">
              <div className="externalResourse__cardItem externalResourse__cardItem_first">
                <div><img src={swapExternalIcon} alt="stakingIcon"/></div>
                <p>Swap</p>
              </div>
              <div className="externalResourse__cardItem externalResourse__cardItem_second">
                <div><img src={liquiditypoolIcon} alt="liquiditypoolIcon"/></div>
                <p>Liquidity pool</p>
              </div>
              <div className="externalResourse__cardItem externalResourse__cardItem_third">
                <div><img src={stakingIcon} alt="swapExternalIcon"/></div>
                <p>Staking</p>
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
