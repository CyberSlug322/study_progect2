import React from 'react';
import '../App.css'
import { Post } from './post';

export const Posts = (props) => {
    let addPost = () => {
        props.dispatch(
            {
                type: 'ADD_POST',
                postTitle: 'new title'
            })
    };
    return (
        <div className={'posts'}>
            {props.state.posts.map( (post) => {return <Post postTitle={post.postTitle} />} )}
            <button onClick={addPost}>add post</button>
        </div>
    )
}