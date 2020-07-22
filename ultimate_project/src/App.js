import React from 'react';
import './App.css';
import { Post } from './components/post';

function App() {
  return (
    <div className="App">
      <header className={'header'}>header</header>
      <div className={'main-content'}>
        <div className={'left-sidebar'}>
          your walls
          your something
          your something
          your something
        </div>
        <div className={'walls'}>
          <div className={'posts'}>
            <div className={'post'}>
              post commit
          </div>
            <div className={'post'}>
              post
          </div>
            <Post postTitle={'post title'}/>
          </div>
          <div className={'right-sidebar'}>
            something else
            something else
            something else
            something else
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
