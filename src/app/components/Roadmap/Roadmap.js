import React from 'react';

const Roadmap = () => {

  return (
      <>
          <section className='common__background_purple' name='roadmap'>
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
                          <span className='roadmap__phaseSubtitle'>August — October 2021</span>
                      </div>
                      <ul className='roadmap__phaseList'>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Launch of the token </span>
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
                                  Virtual, endless, </span>
                                  first in the world NFT museum-shop (Beta)
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
                                 Creation of AUSD stable coin </span>
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Launch DEX </span>
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Launch
                              </span>
                                of the decentralized financial game "Safe"
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
                                  Infinite liquidity mechanisms </span>
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                  Launch KeepPrice system
                              </span>
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                              <span className="roadmap__phaseItemText_bold">
                                 Launch virtual, endless
                              </span>
                                NFT museum-shop for all the world
                              </p>
                          </li>
                      </ul>
                  </div>

              </div>
          </section>
      </>

  );
}

export default Roadmap;
