import React from 'react';
import {_t} from "../common/translator";

import safeicon from '../../../../src/img/benefitsimages/safeicon.svg';
import a4icon from '../../../../src/img/benefitsimages/a4icon.svg';
import transparencyicon from '../../../../src/img/benefitsimages/transparencyicon.svg';
import leverageicon from '../../../../src/img/benefitsimages/leverageicon.svg';
import liquidicon from '../../../../src/img/benefitsimages/liquidicon.svg';

const Benefits = () => {

  return(
    <div className="benefits__background">
      <div className="container">
        <div className="benefits">
          <span className='common__number common__number_pink'>
              02
          </span>
          <h2 className="benefits__title">{_t('benefits')}</h2>
          <div className="benefits__items">
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_a4"></div>
              <p className="benefits__item_text">{_t('benefits-item-p-1')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_safe"></div>
              <p className="benefits__item_text">Safe lending to users</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_transparency"></div>
              <p className="benefits__item_text">Full transparency of smart contracts</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_leverage"></div>
              <p className="benefits__item_text">Leverage positions will allow you to significantly increase your profits quick</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_liquid"></div>
              <p className="benefits__item_text">Liquidity pools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
