import React from 'react';
import { Post } from '../treds/post'
import { RightSideBar } from '../common/right-sidebar'
import style from './home-page.module.css';

export const HomePage = ({state, dispatch}) => {

    // let addPost = () => {
    //     props.dispatch(
    //         {
    //             type: 'ADD_POST',
    //         123    postTitle: 'new title'
    //         })
    // };
    return (
        <div className={style.homePage}>
            <div className={'posts'}>
                {state.user.userTred.posts.map((post) => { return <Post postTitle={post.postTitle} /> })}
                {/* <button onClick={addPost}>add post</button> */}
            </div>

            <RightSideBar RightSideBarText={'something'} />
        </div>
    )
}

