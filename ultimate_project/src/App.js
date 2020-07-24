import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content'
=======
import { Header } from './components/header';
import { MainContent } from './components/Main-content/Main-content'
import { Navbar } from './components/navbar';
>>>>>>> 179fe68d5c135602f91e0ca7b3d395997c2fe112
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