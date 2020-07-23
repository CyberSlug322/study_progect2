import React from 'react';
import { Post } from '../Walls/post';
import { RightSideBar } from '../Common/right-sidebar';

export const MyWall = ({state, dispatch}) => {

    // let addPost = () => {
    //     props.dispatch(
    //         {
    //             type: 'ADD_POST',
    //         123    postTitle: 'new title'
    //         })
    // };
    return (
        <div className={'walls'}>
            <div className={'posts'}>
                {state.user.userTred.posts.map((post) => { return <Post postTitle={post.postTitle} /> })}
                {/* <button onClick={addPost}>add post</button> */}
            </div>

            <RightSideBar RightSideBarText={'somethi\nng else something\n elssom\nething elsesome\nthing el\nse'} />
        </div>
    )
}

