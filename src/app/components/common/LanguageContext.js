import React, { useState } from "react";

export const LanguageContext = React.createContext(true);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(true);
    const toggleLang = () => {
        setLang(!lang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};