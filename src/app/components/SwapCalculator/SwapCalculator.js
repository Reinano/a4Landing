import React from 'react';
import {_t} from "../common/translator";

const SwapCalculator = () => {

  return (
      <>
        <section className="swapCalculator">
          <div className='blurryBubble_green'> </div>
          <div className='blurryBubble_pink'> </div>
          <div className='container'>


              <div className="calculator__wrapper">
                  <div>
                      <span className='common__number common__number_pink'>
                          05
                      </span>
                      <h2 className='common__h2 common__maxWidth_480'>
                          {_t('exchange-title')}
                      </h2>
                  </div>

                  <div className='calculator'>

                  </div>
              </div>
          </div>
        </section>
      </>

  );
}

export default SwapCalculator;
