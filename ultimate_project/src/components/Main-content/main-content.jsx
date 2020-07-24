import React from 'react';
import { Route } from 'react-router-dom'
import style from './main-content.module.css'
import { Walls } from './walls/walls';
import { Treds } from './treds';
import { Profile } from './profile/profile';




export const MainContent = ({state, dispatch}) => {
    return (
        <div className={style.mainContent}>
                {/* <Route path={'/myWall'} component={()=><MyWall state={state} dispatch={dispatch}/>} /> */}
                {/* <Route path={'/walls/walls'} component={()=><Walls state={state} dispatch={dispatch}/>} /> */}
                {/* <Route path={'/myTreds'} component={()=><Treds/>} /> */}
                {/* <Route path={'/profile'} component={()=><Profile state={state.profile} dispatch={dispatch}/>} /> */}
                <Profile state={state.profile} dispatch={dispatch}/>
        </div>
    )
}
