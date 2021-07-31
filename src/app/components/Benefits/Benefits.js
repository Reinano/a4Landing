import React from 'react';
import {_t} from "../common/translator";

const Benefits = () => {

  return(
    <div className="benefitsContainer benefitsContainer__background">
      <div className="container">
        <div className="benefits">
          <span className='common__number common__number_pink'>
              02
          </span>
          <h2 className="benefits__title">{_t('benefits-title')}</h2>
          <div className="benefits__items">
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_a4"></div>
              <p className="benefits__item_text">{_t('benefits-item-1')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_safe"></div>
              <p className="benefits__item_text">{_t('benefits-item-2')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_transparency"></div>
              <p className="benefits__item_text">{_t('benefits-item-3')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_leverage"></div>
              <p className="benefits__item_text">{_t('benefits-item-4')}</p>
            </div>
            <div className="benefits__item">
              <div className="benefits__itemIcon benefits__itemIcon_liquid"></div>
              <p className="benefits__item_text">{_t('benefits-item-5')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
