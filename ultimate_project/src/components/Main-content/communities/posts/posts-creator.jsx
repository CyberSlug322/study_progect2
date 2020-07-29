import React from 'react';
import { Post } from './post';
// import style from '../communities.module.css';

export const PostsCreator = ({ postObj, dispatch }) => {
    let addPost = () => {
        dispatch(
            {
                type: 'ADD_POST',
                postTitle: 'new title',
                id: Date.now()
            })
    };
    
    return (
        
        <div >
            {postObj.map( (post) => {return <Post postTitle={post.postTitle} postId={post.id} postObj = {postObj} dispatch = {dispatch} />} )}
            <button onClick={addPost}>add post</button>
        </div>
    )
}
// className={style.posts}