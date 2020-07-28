import React from 'react';
import { Post } from './post';
// import style from '../communities.module.css';

export const Posts = ({ postObj, dispatch }) => {
    let addPost = () => {
        dispatch(
            {
                type: 'ADD_POST',
                postTitle: 'new title'
            })
    };
    
    return (
        
        <div >
            {postObj.map( (post) => {return <Post postTitle={post.postTitle} />} )}
            <button onClick={addPost}>add post</button>
        </div>
    )
}
// className={style.posts}