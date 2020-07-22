import React from 'react';
import './App.css';



import { Header } from './components/header';


import { MainContent } from './components/Main-content'
function App() {
  return (
    <div className="App">
      <Header header={'хедер'} />
      <MainContent/>
      
     
    </div>
  );
}

export default App;
