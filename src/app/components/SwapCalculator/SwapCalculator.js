import React from 'react';

const SwapCalculator = () => {

  return (
      <>
          <div className='container'>

              <div className='blurryBubble_green'> </div>
              <div className='blurryBubble_pink'> </div>

              <div className="calculator__wrapper">
                  <div>
                      <span className='common__number common__number_pink'>
                          05
                      </span>
                      <h2 className='common__h2 common__maxWidth_430'>
                          Еxchanges, staking<br/>and liquidity pools
                      </h2>
                  </div>

                  <div className='calculator'>

                  </div>
              </div>
          </div>
      </>

  );
}

export default SwapCalculator;
