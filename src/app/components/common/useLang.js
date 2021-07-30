import React from "react";
import {LanguageContext} from "./LanguageContext";

export const useLanguage = () => {
    const { lang } = React.useContext(LanguageContext);
    return lang;
}