import React from 'react';
import style from './post.module.css';

export const Post = (props) => {
    return (
    <div className={style.post}> {props.postTitle} </div>
    )
};
