import React from "react";
import {useLanguage} from "./useLang";

export const useTranslation = (text) => {

    const isEng = useLanguage()

    switch (text){
        case 'hero-screen-heading': {
            return isEng ?
                'Binance Smart Chain Leveraged Farming Made Easy With ' :
                'Фермерство на Binance Smart Chain с использованием заемных средств стало проще с помощью ';
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
                'Напомнить о старте';
        }
        case 'about-title-dark': {
            return isEng ?
                'A4 is a lending protocol that allows you to increase your profitability ' :
                'A4 — протокол кредитования, который позволяет увеличивать вашу доходность ';
        }
        case 'about-title-fade': {
            return isEng ?
                'by leveraging funds on the Binance Smart Chain.' :
                'с использованием заемных средств на Binance Smart Chain.';
        }
        case 'about-item-1-1': {
            return isEng ?
                'The protocol enables lenders to receive ' :
                'Протокол дает возможность кредиторам получать ';
        }
        case 'about-item-1-2': {
            return isEng ?
                'secure and stable income ' :
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
                'Заемщики, в свою очередь, могут получить кредиты для повышения эффективности своей деятельности.';
        }
        case 'about-item-2-2': {
            return isEng ?
                'can obtain loans ' :
                'могут получить кредиты';
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
                'as a regulator and guarantor ' :
                'регулятором и гарантом ';
        }
        case 'about-item-3-3': {
            return isEng ?
                'of the transparency of the transaction.' :
                'прозрачности сделки.';
        }
        case 'a': {
            return isEng ?
                '' :
                '';
        }


        default: return 'no-translation'
    }

}

export const _t = (text) => {
    return useTranslation(text);
}