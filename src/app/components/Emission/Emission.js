import React from "react";
import {_t} from "../common/translator";

const Emission = () => {
    return (
        <>
            <section className='emission__background relative' name='tokenomics'>
                <div className="emission__background_circle"> </div>
                <div className='container'>
                  <div className="emission__innerWrapper">
                    <div className="emission__graphContainer relative">
                        <div className='emission__badge emission__badge_1'>
                            <div className="emission__badgeTitle">50%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_1">{_t('emission-item-1')}</span>
                        </div>
                        <div className='emission__badge emission__badge_2'>
                            <div className="emission__badgeTitle">17,5%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_2">{_t('emission-item-2')}</span>
                        </div>
                        <div className='emission__badge emission__badge_3'>
                            <div className="emission__badgeTitle">11,25%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_3">{_t('emission-item-3')}</span>
                        </div>
                        <div className='emission__badge emission__badge_4'>
                            <div className="emission__badgeTitle">8,75</div>
                            <span className="emission__badgeSpan emission__badgeSpan_4">{_t('emission-item-5')}</span>
                        </div>
                        <div className='emission__badge emission__badge_5'>
                            <div className="emission__badgeTitle">10%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_5">{_t('emission-item-4')}</span>
                        </div>
                        <div className='emission__badge emission__badge_6'>
                            <div className="emission__badgeTitle">2,5%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_6">{_t('emission-item-6')}</span></div>
                        <div className="emission__circleGraph"> </div>
                    </div>

                    <div className="emission__info">
                      <p className="emission__desc emission__desc_total">Total Emission:</p>
                      <h2 className="emission__title">10 Trillions <span className="emission__title_icon"></span></h2>
                      <p className="emission__desc emission__desc_a4tokens">10 000 000 000 000 A4 Tokens</p>
                    </div>
                  </div>
                </div>
            </section>
        </>

    )
}

export default Emission;
