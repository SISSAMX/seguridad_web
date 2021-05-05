import React, { useState, useMemo } from 'react'
import { LanguageContext } from '../common/components/Context/LanguageContext/LanguageContext';
import App from './App';

const getLenguage = (lng: string, setLanguage: any) => {
  return {lng, setLanguage};
};

export default function Home(){
    const [lang, setLanguage] = useState('es-MX');
    // const value = useMemo(() => ({lang:any, setLanguage:any}, [lang:an, setLanguage]));
    const value = useMemo(() => getLenguage(lang, setLanguage), [lang, setLanguage]);
    
  return (
    <LanguageContext.Provider value={value}>
      <App/>
    </LanguageContext.Provider>
  )
}
