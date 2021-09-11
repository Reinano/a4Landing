import React from 'react';
import {_t} from "../common/translator";

const Roadmap = () => {

  return (
      <>
          <section className='roadmap' name='roadmap'>
              <div className="roadmap_bg"></div>
              <div className='container'>
                    <span className='common__number common__number_green'>
                        07
                    </span>
                  <h2 className='common__h2 common__h2_white'>
                      {_t('roadmap-title')}
                  </h2>

                  <div className="roadmap__phases">
                      <div className="roadmap__phaseContainer">
                          <div className="roadmap__phaseIcon roadmap__phaseIcon_1"> </div>
                          <h3 className='roadmap__phaseTitle'>{_t('roadmap-phase-title')} 1</h3>
                          <span className='roadmap__phaseSubtitle'>{_t('roadmap-phase-date-one')}</span>
                      </div>
                      <ul className='roadmap__phaseList'>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phaseone-item-1')}&nbsp;
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phaseone-item-2')}&nbsp;
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phaseone-item-3-1')}&nbsp;
                                  {_t('phaseone-item-3-2')}
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phaseone-item-4-1')}&nbsp;
                                  {_t('phaseone-item-4-2')}
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phaseone-item-5-1')}&nbsp;
                                  {_t('phaseone-item-5-2')}
                              </p>
                          </li>
                      </ul>

                      <div className="roadmap__phaseContainer">
                          <div className="roadmap__phaseIcon roadmap__phaseIcon_2"> </div>
                          <h3 className='roadmap__phaseTitle'>{_t('roadmap-phase-title')} 2</h3>
                          <span className='roadmap__phaseSubtitle roadmap__phaseSubtitle_pink'>{_t('roadmap-phase-date-two')}</span>
                      </div>
                      <ul className='roadmap__phaseList'>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phasetwo-item-1-1')}&nbsp;
                                  {_t('phasetwo-item-1-2')}
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phasetwo-item-2-1')}&nbsp;
                                  {_t('phasetwo-item-2-2')}
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                 {_t('phasetwo-item-3')}
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phasetwo-item-4')}
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                {_t('phasetwo-item-5-1')}&nbsp;
                                {_t('phasetwo-item-5-2')}
                              </p>
                          </li>
                      </ul>

                      <div className="roadmap__phaseContainer">
                          <div className="roadmap__phaseIcon roadmap__phaseIcon_3"> </div>
                          <h3 className='roadmap__phaseTitle'>{_t('roadmap-phase-title')} 3</h3>
                          <span className='roadmap__phaseSubtitle roadmap__phaseSubtitle_blue'>{_t('roadmap-phase-date-three')}</span>
                      </div>
                      <ul className='roadmap__phaseList'>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phasethree-item-1')}
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                  {_t('phasethree-item-2')}
                              </p>
                          </li>
                          <li className="roadmap__phaseItem">
                              <p className="roadmap__phaseItemText">
                                 {_t('phasethree-item-3-1')}&nbsp;
                                {_t('phasethree-item-3-2')}
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
