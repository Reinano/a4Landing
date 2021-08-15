import React from "react";
import {useLanguage} from "./useLang";
import {Typograph} from "./Typograph";

export const useTranslation = (text) => {

    const isEng = useLanguage()

    switch (text){
        case 'hero-screen-heading': {
            return isEng ?
                'Binance Smart Chain Leveraged Farming Made Easy With ' :
                'Фермерство на Binance Smart Chain с использованием заемных средств стало проще с помощью ';
        }
        case 'hero-screen-heading-green': {
            return isEng ?
                'A4 Tokens ' :
                'A4 Токены ';
        }
        case 'hero-screen-small-text': {
            return isEng ?
                'Increase Your Assets In Both Bull And Bear Markets. And also get strong leverage without the risk of losing capital.' :
                'Увеличивайте свои активы как на бычьем, так и на медвежьем рынках. А также получайте сильные кредитные плечи, без риска потери капитала.';
        }
        case 'countdown': {
            return isEng ?
                'Before the launch of the presale:' :
                'До старта предпродаж осталось:';
        }
        case 'days': {
            return isEng ?
                'Days' :
                'Дней';
        }
        case 'hours': {
            return isEng ?
                'Hours' :
                'Часов';
        }
        case 'minutes': {
            return isEng ?
                'Minutes' :
                'Минут';
        }
        case 'seconds': {
            return isEng ?
                'Seconds' :
                'Секунд';
        }
        case 'remind-me': {
            return isEng ?
                'Remind me' :
                'Напомнить';
        }
        case 'about-title-dark': {
            return isEng ?
                'A4 is a lending </br> protocol that allows you to increase your profitability ' :
                'A4 — протокол кредитования, который позволяет увеличивать вашу доходность ';
        }
        case 'about-title-fade': {
            return isEng ?
                '<br> by leveraging funds on the Binance Smart Chain.' :
                'с использованием заемных средств на Binance Smart Chain.';
        }
        case 'about-item-1-1': {
            return isEng ?
                'The protocol enables lenders to receive ':
                'Протокол дает возможность кредиторам получать ';
        }
        case 'about-item-1-2': {
            return isEng ?
                'secure and stable income ':
                'безопасный и стабильный доход ';
        }
        case 'about-item-1-3': {
            return isEng ?
                'from cryptocurrency loans.' :
                'за ссуды криптовалют.';
        }
        case 'about-item-2-1': {
            return isEng ?
                'Borrowers, in turn, ' :
                'Заемщики, в свою очередь, ';
        }
        case 'about-item-2-2': {
            return isEng ?
                'can obtain loans ' :
                'могут получить кредиты ';
        }
        case 'about-item-2-3': {
            return isEng ?
                'to improve the efficiency of their activities.' :
                ' для повышения эффективности своей деятельности.';
        }
        case 'about-item-3-1': {
            return isEng ?
                'A4 will act ' :
                'A4 выступит ';
        }
        case 'about-item-3-2': {
            return isEng ?
                'as a regulator and guarantor' :
                'регулятором и гарантом ';
        }
        case 'about-item-3-3': {
            return isEng ?
                'of the transparency of the transaction.' :
                'прозрачности сделки.';
        }
        case 'token-ticker': {
            return isEng ?
                'Token Ticker:' :
                'Token Ticker:';
        }
        case 'contact-address': {
            return isEng ?
                'Contract Address:' :
                'Contract Address:';
        }
        case 'benefits-title': {
            return isEng ?
                'We offer' :
                'Мы предлагаем';
        }
        case 'benefits-item-1': {
            return isEng ?
                'A4-token insurance using KeepPrice technology' :
                'Страховку a4-token за счет KeepPrice';
        }
        case 'benefits-item-2': {
            return isEng ?
                'Safe lending to users' :
                'Безопасное кредитование пользователей';
        }
        case 'benefits-item-3': {
            return isEng ?
                'Full transparency of smart contracts' :
                'Полная прозрачность смартконтрактов';
        }
        case 'benefits-item-4': {
            return isEng ?
                'Leverage positions will allow you to significantly increase your profits quick' :
                'Позиции с кредитным плечом нашего протокола увеличат вашу прибыль';
        }
        case 'benefits-item-5': {
            return isEng ?
                'Liquidity pools' :
                'Пулы ликвидности';
        }
        case 'emission-title': {
            return isEng ?
                'Trillion ' :
                'Триллион ';
        }
        case 'emissionMobile-title': {
            return isEng ?
                'Vocabulary ' :
                'Токеномика ';
        }
        case 'emission-totalEmission': {
            return isEng ?
                'Total Emission ' :
                'Общий выпуск ';
        }
        case 'emission-A4-tokens': {
            return isEng ?
                'Tokens ' :
                'Токены ';
        }
        case 'emission-item-1': {
            return isEng ?
                'Stacking' :
                'Стейкинг';
        }
        case 'emission-item-2': {
            return isEng ?
                'Hackathon' :
                'Хакатоны';
        }
        case 'emission-item-3': {
            return isEng ?
                'Team' :
                'Команда';
        }
        case 'emission-item-4': {
            return isEng ?
                'Sale' :
                'Продажа';
        }
        case 'emission-item-5': {
            return isEng ?
                'Advertising campaign' :
                'Рекламная кампания';
        }
        case 'emission-item-6': {
            return isEng ?
                'Liquidity pools' :
                'Пулы ликвидности';
        }
        case 'nav-about': {
            return isEng ?
                'About' :
                'О нас';
        }
        case 'nav-offer': {
            return isEng ?
                'We offer' :
                'Мы предлагаем';
        }
        case 'nav-tokenomics': {
            return isEng ?
                'Tokenomics' :
                'Токеномика';
        }
        case 'nav-roadmap': {
            return isEng ?
                'RoadMap' :
                'Карта';
        }
        case 'nav-social': {
            return isEng ?
                'Social' :
                'Соц. сети';
        }
        case 'exchange-title': {
            return isEng ?
                'Еxchanges, staking and liquidity pools' :
                'Обмены, стейкинг и пулы ликвидности';
        }
        case 'social-title': {
            return isEng ?
                'Social networks' :
                'Мы в социальных сетях';
        }
        case 'social-par-bold': {
            return isEng ?
                'Follow the news and development of the project,' :
                'Следите за новостями и развитием проекта,';
        }
        case 'social-par-fade': {
            return isEng ?
                'as well as participate in the life of the community on our social networks' :
                'а также участвуйте в жизни сообщества в наших социальных сетях';
        }
        case 'footer-license': {
            return isEng ?
                'Vauban is a trading name of Vauban Technologies Limited, a company incorporated in England and Wales (11128704) with Registered Office and Business address at 1 Frederick\'s Place, London EC2R 8AE, United Kingdom.' :
                'Vauban is a trading name of Vauban Technologies Limited, a company incorporated in England and Wales (11128704) with Registered Office and Business address at 1 Frederick\'s Place, London EC2R 8AE, United Kingdom.';
        }
        case 'a': {
            return isEng ?
                '' :
                '';
        }
        case 'benefits': {
            return isEng ?
                'We offer' :
                'Мы предлагаем';
        }
        case 'benefits-item-p-1': {
            return isEng ?
                'A4-token insurance using KeepPrice technology ' :
                'Страховку a4-token за счет KeepPrice';
        }


        default: return 'no-translation'
    }

}

export const _t = (text) => {
    const textForMarkup = useTranslation(text);

    function createMarkup(textForMarkup) {
        if (textForMarkup) {
            const outerMarkup = Typograph(textForMarkup);
            return {__html:outerMarkup};
        }

    }

    return(
        <>
            <span dangerouslySetInnerHTML={createMarkup(textForMarkup)}/>
        </>
    )
}
