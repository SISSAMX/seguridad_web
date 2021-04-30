import React, {useContext} from 'react';
import styles from '../styles/Home.module.css'
import Header from '../common/components/Components/headerContainer';
import {IntlProvider} from 'react-intl';
import Spanish from '../common/components/languages/es-MX.json';
import English from '../common/components/languages/en-US.json';
import { NewLanguageContext } from '../common/components/Context/NewLanguageContext';


const App = () => {
    const [lang] = useContext(NewLanguageContext)

    let language: any;

    if(lang=='es-MX') 
      language = Spanish;
    else 
      language = English;

    return (
      <div>
          <IntlProvider locale={lang || 'es-ES'} messages={language}>
            <Header/>
            <div className={styles.espacioEjemplo}> 
            <span>&#127474;&#127485;</span>
            <span>&#127482;&#127480;</span>
            <h1>Hola</h1>
            </div>
          </IntlProvider>
      </div>
    )
  }
  
export default App;