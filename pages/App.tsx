import React, {useContext} from 'react';
import styles from '../styles/Home.module.css'
import Header from '../common/components/Components/headerContainer';
import {IntlProvider} from 'react-intl';
import Spanish from '../common/components/languages/es-MX.json';
import English from '../common/components/languages/en-US.json';
import { LanguageContext } from '../common/components/Context/LanguageContext/LanguageContext';
import TodosProvider, { TodosContext } from "../common/components/Context/TodoContext/TodosContext";
import Footer from '../common/components/Components/FooterContainer';

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
            <h1>Hola</h1>
            <Footer/>
          </IntlProvider>
          
      </div>
    )
  }

const Todos = () => {
  const { todos, addTodo } = useContext(TodosContext);

  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>
      <button onClick={() => addTodo("new todo")}>add todo</button>
    </div>
  );
};

export default () => (
  <TodosProvider>
   {/*  <Todos /> */}
    <App/>
  </TodosProvider>
);