import React from 'react';
import { Post } from '../Walls/post'
import { RightSideBar } from '../Common/right-sidebar'
// import '../App.css';

export const MyWall = (props) => {

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
                {props.state.myPosts.map((post) => { return <Post postTitle={post.postTitle} /> })}
                {/* <button onClick={addPost}>add post</button> */}
            </div>

            <RightSideBar RightSideBarText={'somethi\nng else something\n elssom\nething elsesome\nthing el\nse'} />
        </div>
    )
}

