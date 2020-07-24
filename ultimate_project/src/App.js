import React from 'react';
import './App.css';
import { Header } from './components/header';
import { MainContent } from './components/main-content/Main-content'
import { Navbar } from './components/navbar';
function App({state, dispatch}) {
  
  return (
    <div>
      <Header />
    <div className="App">
      
      <Navbar />
      <MainContent state={state} dispatch={dispatch}/>
    </div>
    </div>
  );
}

export default App;