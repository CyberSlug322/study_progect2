import React from 'react';
import './App.css';
import { Post } from './components/post';

function App({state, dispatch}) {

  let addPost = () => {
    dispatch({type: 'ADD_POST',
  postTitle: 'new title'})
  }

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
              post
          </div>
            <div className={'post'}>
              post
          </div>
            <Post postTitle={'post title'} />
            <button onClick={addPost}> add post </button>
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
