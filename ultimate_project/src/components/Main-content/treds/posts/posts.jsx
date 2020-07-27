import React from 'react';
import { Post } from './post';
import style from '../treds.module.css';

export const Posts = ({ postObj, dispatch }) => {
    let addPost = () => {
        dispatch(
            {
                type: 'ADD_POST',
                postTitle: 'new title'
            })
    };
    
    return (
        
        <div className={style.posts}>
            {postObj.map( (post) => {return <Post postTitle={post.postTitle} />} )}
            <button onClick={addPost}>add post</button>
        </div>
    )
}
