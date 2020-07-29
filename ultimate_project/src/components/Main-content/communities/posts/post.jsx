import React from 'react';
import style from './post-style/post.module.css';
import { PostHeader } from './post-header';
import { PostFooter } from './post-footer';
import { PostMainContent} from './post-maincontent';

export const Post = (props) => {
    return (
    <div className={style.post}> {props.postTitle} 
    <PostHeader />
    <PostMainContent />
    <PostFooter dispatch = {props.dispatch} postObj = {props.postObj} postId = {props.postId} />
    
    </div>
    )
};
