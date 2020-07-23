import React from 'react';
import './App.css';
import { Header } from './components/header';
import { MainContent } from './components/main-content/main-content'
function App({state, dispatch}) {
  
  return (
    <div className="App">
      <Header header={'хедер'} />
      <MainContent state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;