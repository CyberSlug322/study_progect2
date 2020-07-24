import React from 'react';
import './App.css';
import { Header } from './components/header';
import { MainContent } from './components/Main-content/Main-content'
import { Navbar } from './components/Main-content/left-sidebar';
function App({state, dispatch}) {
  
  return (
    <div className="App">
      <Header header={'хедер'} />
      <Navbar />
      <MainContent state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;