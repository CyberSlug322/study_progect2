import React from 'react';
import { Post } from './post';
import style from './treds.module.css';

export const Posts = ({state, dispatch}) => {
    let addPost = () => {
        dispatch(
            {
                type: 'ADD_POST',
                postTitle: 'new title'
            })
    };
    return (
        <div className={style.posts}>
            {state.treds[0].posts.map( (post) => {return <Post postTitle={post.postTitle} />} )}
            <button onClick={addPost}>add post</button>
        </div>
    )
}
