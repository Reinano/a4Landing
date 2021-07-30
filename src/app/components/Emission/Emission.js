import React from "react";

const Emission = () => {
    return (
        <>
            <div className='relative'>
                <div className="emission__background_circle"> </div>
                <div className='container'>

                    <div className="emission__graphContainer relative">
                        <div className='emission__badge emission__badge_1'>
                            <div className="emission__badgeTitle">50%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_1">Stacking</span>
                        </div>
                        <div className='emission__badge emission__badge_2'>
                            <div className="emission__badgeTitle">17,5%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_2">Hackathon</span>
                        </div>
                        <div className='emission__badge emission__badge_3'>
                            <div className="emission__badgeTitle">11,25%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_3">Team</span>
                        </div>
                        <div className='emission__badge emission__badge_4'>
                            <div className="emission__badgeTitle">10%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_4">Sale</span>
                        </div>
                        <div className='emission__badge emission__badge_5'>
                            <div className="emission__badgeTitle">8,75%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_5">Advertising<br/>campaign</span>
                        </div>
                        <div className='emission__badge emission__badge_6'>
                            <div className="emission__badgeTitle">2,5%</div>
                            <span className="emission__badgeSpan emission__badgeSpan_6">Liquidity<br/>pools</span></div>
                        <div className="emission__circleGraph"> </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Emission;
