import React from 'react';
import { Route } from 'react-router-dom'
import style from './main-content.module.css'
import { Walls } from './walls/walls';
import { Treds } from './treds/treds';
import { Profile } from './profile/profile';
import { Posts } from './treds/posts/posts';





export const MainContent = ({state, dispatch}) => {
    debugger
    return (
        <div className={style.mainContent}>
            
                {/* <Route path={'/myWall'} component={()=><MyWall state={state} dispatch={dispatch}/>} /> */}
                <Route path={'/walls/walls'} component={()=><Walls state={state} dispatch={dispatch}/>} />
                <Route path={'/myTreds'} component={()=><Treds state={state.post} dispatch={dispatch}/>} />
                <Route path={'/profile'} component={()=><Profile state={state.profile} dispatch={dispatch}/>} />
                 { <Route exact path={'/myTreds/tred1'} component={()=><Posts state={state.treds[0].posts} dispatch={dispatch}/>} /> } 
              {/* <Treds /> */}
        </div>
    )
}
