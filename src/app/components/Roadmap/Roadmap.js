import React from 'react';

const Roadmap = () => {

  return (
      <>
          <div className='common__background_purple'>
              <div className='container'>
                    <span className='common__number common__number_green'>
                        06
                    </span>
                  <h2 className='common__h2 common__h2_white'>
                      RoadMap
                  </h2>

                  <div className="roadmap__phases">
                      <div className="roadmap__phaseContainer">
                          <div className="roadmap__phaseIcon roadmap__phaseIcon_1"> </div>
                          <h3 className='roadmap__phaseTitle'>Phase 1</h3>
                          <span className='roadmap__phaseSubtitle'>May — June 2021</span>
                      </div>
                      <ul className='roadmap__phaseList'>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Launch of the token </span>
                                  on the Binance Smart Chain
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  TokenSale
                              </span>
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  A custodial wallet </span>
                                  with A4 staking capability (IOS / Android)
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Listing </span>
                                  on centralized exchanges, as well as CoinMarketCap
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Adding liquidity </span>
                                  pairs on Pancake Swap
                              </p>
                          </li>
                      </ul>

                      <div className="roadmap__phaseContainer">
                          <div className="roadmap__phaseIcon roadmap__phaseIcon_2"> </div>
                          <h3 className='roadmap__phaseTitle'>Phase 2</h3>
                          <span className='roadmap__phaseSubtitle roadmap__phaseSubtitle_pink'>July — September 2021</span>
                      </div>
                      <ul className='roadmap__phaseList'>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Virtual Exhibition, </span>
                                  World's First NFT Digital Museum
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Adding Payment Systems </span>
                                  (VISA / MasterCard)
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                 AUSD Stablecoin </span>
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  A decentralized </span>
                                  wallet with internal exchange
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Social mission
                              </span>
                              </p>
                          </li>
                      </ul>

                      <div className="roadmap__phaseContainer">
                          <div className="roadmap__phaseIcon roadmap__phaseIcon_3"> </div>
                          <h3 className='roadmap__phaseTitle'>Phase 3</h3>
                          <span className='roadmap__phaseSubtitle roadmap__phaseSubtitle_blue'>October — December 2021</span>
                      </div>
                      <ul className='roadmap__phaseList'>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  The addition </span>
                                  of new liquidity pairs/ independent tokens with a reserve of A4
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Cryptomats
                              </span>
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                 CEX/DEX Exchange
                              </span>
                              </p>
                          </li>
                      </ul>

                      <div className="roadmap__phaseContainer">
                          <div className="roadmap__phaseIcon roadmap__phaseIcon_4"> </div>
                          <h3 className='roadmap__phaseTitle'>Phase 4</h3>
                          <span className='roadmap__phaseSubtitle roadmap__phaseSubtitle_yellow'>January — March 2022</span>
                      </div>
                      <ul className='roadmap__phaseList'>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  AUSD
                              </span>
                                  with A4 deposits
                              </p>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </>

  );
}

export default Roadmap;
