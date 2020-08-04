import React from 'react';
import { Route } from 'react-router-dom'
import style from './main-content.module.css'
import { Walls } from './walls/walls';
import { Communities } from './communities/communities';
import { Profile } from './profile/profile';
 import { PostsCreator } from './communities/posts/posts-creator';





export const MainContent = ({state, dispatch}) => {
    debugger
    return (

        <div className={style.mainContent}>
            
                {/* <Route path={'/myWall'} component={()=><MyWall state={state} dispatch={dispatch}/>} /> */}
                <Route path={'/walls/walls'} component={()=><Walls state={state} dispatch={dispatch}/>} />
                <Route exact path={'/myCommunities'} component={()=><Communities communityArr={state.communityArr} dispatch={dispatch}/>} />
                <Route path={'/profile'} component={()=><Profile profile={state.profile} dispatch={dispatch}/>} />
                
                {state.communityArr.communities.map( (community) => { return <Route path={community.url} component={()=><PostsCreator postsArr={community.posts} dispatch={dispatch}/>}/> })}
                {/* <Route path={'/myCommunities/Community1'} component={()=><PostsCreator communityArr={state.communityArr.communities[0].posts} dispatch={dispatch}/>} />  */}
              {/* <Treds /> */}
        </div>
    )
}
