import React from 'react';
<<<<<<< HEAD:ultimate_project/src/components/Main-content/home-page/home-page.jsx
import { Post } from '../treds/post'
import { RightSideBar } from '../common/right-sidebar'
import style from './home-page.module.css';
=======
// import { Post } from '../walls/post'
// import { RightSideBar } from '../common/right-sidebar'
// import '../App.css';
>>>>>>> 179fe68d5c135602f91e0ca7b3d395997c2fe112:ultimate_project/src/components/Main-content/my-wall/my-wall.jsx

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
                {/* {state.user.userTred.posts.map((post) => { return <Post postTitle={post.postTitle} /> })} */}
                ssss
                {/* <button onClick={addPost}>add post</button> */}
            </div>

<<<<<<< HEAD:ultimate_project/src/components/Main-content/home-page/home-page.jsx
            <RightSideBar RightSideBarText={'something'} />
=======
            {/* <RightSideBar RightSideBarText={'somethi\nng else something\n elssom\nething elsesome\nthing el\nse'} /> */}
>>>>>>> 179fe68d5c135602f91e0ca7b3d395997c2fe112:ultimate_project/src/components/Main-content/my-wall/my-wall.jsx
        </div>
    )
}

