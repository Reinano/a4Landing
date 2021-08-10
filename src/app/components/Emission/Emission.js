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
                      <p className="emission__desc emission__desc_total">{_t('emission-totalEmission')}:<span className="emission__desc_a4spanOne">A4 {_t('emission-A4-tokens')}</span></p>
                      <h2 className="emission__title">10 {_t('emission-title')}<span className="emission__title_icon"></span></h2>
                      <p className="emission__desc emission__desc_a4tokens">10 000 000 000 000 <span className="emission__desc_a4spanTwo">A4 {_t('emission-A4-tokens')}</span></p>
                    </div>

                    <div className="emission__mobileGraph">
                      <div className="emission__mobileGraphItem emission__mobileGraphItem_1"></div>
                      <div className="emission__mobileGraphItem emission__mobileGraphItem_2"></div>
                      <div className="emission__mobileGraphItem emission__mobileGraphItem_3"></div>
                      <div className="emission__mobileGraphItem emission__mobileGraphItem_4"></div>
                      <div className="emission__mobileGraphItem emission__mobileGraphItem_5"></div>
                      <div className="emission__mobileGraphItem emission__mobileGraphItem_6"></div>
                    </div>
                    <div className="emissionMobile">
                      <span className="common__number">4</span>
                      <h2 className="emissionMobile__title">{_t('emissionMobile-title')}</h2>
                    </div>
                  </div>
                </div>
            </section>
        </>

    )
}

export default Emission;
