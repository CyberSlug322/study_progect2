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
    <PostFooter />
    <img src={'https://cs9.pikabu.ru/post_img/2017/02/07/8/og_og_1486475033280814266.jpg'} alt={'nt found'}/>
    </div>
    )
};
