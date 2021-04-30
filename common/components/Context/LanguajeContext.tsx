import React, {useContext, useState} from 'react';

const LanguageContext = React.createContext(null)
const LanguageUpdateContext = React.createContext(null)

export function useLanguage(){
    return useContext(LanguageContext)
}

export function useLanguageUpdate(){
    return useContext(LanguageUpdateContext)
}

export function LanguageProvider({children}){
    const [language, setLanguage] = useState('es-MX');

    function toggleLanguage(){
        if(language=='es-MX'){
            setLanguage('en-US')
        }
        else{
            setLanguage('es-MX')
        }
    }

    return (
        <LanguageContext.Provider value={language} >
            <LanguageUpdateContext.Provider value={toggleLanguage}>
                {children}
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    )
}