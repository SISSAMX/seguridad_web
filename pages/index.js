import React, { useState, useMemo } from 'react'
import { NewLanguageContext } from '../common/components/Context/NewLanguageContext';
import App from './App';

export default function Home(){
    const [lang, setLanguage] = useState('es-MX')

    const value = useMemo( () => ({lang, setLanguage}, [lang, setLanguage]))
  return (
    <NewLanguageContext.Provider value={value}>
      <App/>
    </NewLanguageContext.Provider>
  )
}
