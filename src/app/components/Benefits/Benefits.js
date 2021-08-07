import React from 'react';
import fullicon from '../../../../src/img/benefitsimages/Groupfull.svg';
import leverageicon from '../../../../src/img/benefitsimages/Groupleverage.svg';
import safeicon from '../../../../src/img/benefitsimages/Groupsafe.svg';
import luquidicon from '../../../../src/img/benefitsimages/Groupliquid.svg';
import a4icon from '../../../../src/img/benefitsimages/VectorbenefitsA4icon.svg';

import {_t} from "../common/translator";

const Benefits = () => {

  return(
    <div className="benefits__background">
      <div className="container">
        <div className="benefits">
          <span className='common__number common__number_pink'>
              02
          </span>

          <h2 className="benefits__title">{_t('benefits-title')}</h2>
          <div className="benefits__items">
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_a4">
                <img src={a4icon} alt="a4icon"/>
              </div>
              <p className="benefits__item_text">{_t('benefits-item-1')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_safe">
                <img src={safeicon} alt="safeicon"/>
              </div>
              <p className="benefits__item_text">{_t('benefits-item-2')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_transparency">
                <img src={fullicon} alt="fullicon"/>
              </div>
              <p className="benefits__item_text">{_t('benefits-item-3')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_leverage">
                <img src={leverageicon} alt="leverageicon"/>
              </div>
              <p className="benefits__item_text">{_t('benefits-item-4')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_liquid">
                <img src={luquidicon} alt="luquidicon"/>
              </div>
              <p className="benefits__item_text">{_t('benefits-item-5')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
