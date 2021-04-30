import React, { useState, useMemo } from 'react'
import { NewLanguageContext } from '../common/components/Context/NewLanguageContext';
import App from './App';

const getLenguage = (lng: string, setLanguage: any) => {
  return {lng, setLanguage};
};

export default function Home(){
    const [lang, setLanguage] = useState('es-MX');
    // const value = useMemo(() => ({lang:any, setLanguage:any}, [lang:an, setLanguage]));
    const value = useMemo(() => getLenguage(lang, setLanguage), [lang, setLanguage]);
    
  return (
    <NewLanguageContext.Provider value={value}>
      <App/>
    </NewLanguageContext.Provider>
  )
}
