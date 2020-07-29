import React from 'react';
import { Route } from 'react-router-dom'
import style from './main-content.module.css'
import { Walls } from './walls/walls';
import { Communities } from './communities/communities';
import { Profile } from './profile/profile';
import { PostsCreator } from './communities/posts/posts-creator';





export const MainContent = ({state, dispatch}) => {

    return (

        <div className={style.mainContent}>
            
                {/* <Route path={'/myWall'} component={()=><MyWall state={state} dispatch={dispatch}/>} /> */}
                <Route path={'/walls/walls'} component={()=><Walls state={state} dispatch={dispatch}/>} />
                <Route exact path={'/myCommunities'} component={()=><Communities postObj={state.post} dispatch={dispatch}/>} />
                <Route path={'/profile'} component={()=><Profile profile={state.profile} dispatch={dispatch}/>} />
                 { <Route path={'/myCommunities/Community1'} component={()=><PostsCreator postObj={state.postObj.treds[0].posts} dispatch={dispatch}/>} /> } 
              {/* <Treds /> */}
        </div>
    )
}
