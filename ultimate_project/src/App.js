import React from 'react';
import style from'./App.module.scss';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content'
import { Navbar } from './components/navbar';
function App({state, dispatch}) {
  
  return (
    <div>
      <Header />
    <div className={style.app}>
      
      <Navbar />
      <MainContent state={state} dispatch={dispatch}/>
    </div>
    </div>
  );
}

export default App;