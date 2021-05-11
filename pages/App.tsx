import React, {useContext} from 'react';
import Header from '../common/components/Components/Header/headerContainer';
import {IntlProvider} from 'react-intl';
import Spanish from '../common/components/languages/es-MX.json';
import English from '../common/components/languages/en-US.json';
import { LanguageContext } from '../common/components/Context/LanguageContext/LanguageContext';
import TodosProvider, { TodosContext } from "../common/components/Context/TodoContext/TodosContext";
import Footer from '../common/components/Components/Footer/FooterContainer';
import Dashboard from './dashboard';

const App = () => {
    const [lang] = useContext(LanguageContext)
    let language: any;

    if(lang=='es-MX') 
      language = Spanish;
    else 
      language = English;

    return (
      <div>
          <IntlProvider locale={lang || 'es-ES'} messages={language}>
            <Header/>
            <Dashboard/>
            <Footer/>
          </IntlProvider>
          
      </div>
    )
  }
export default App;