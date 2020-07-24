import React from 'react';
<<<<<<< HEAD
import { Route, BrowserRouter } from 'react-router-dom';
import style from './main-content.module.css';
import { LeftSideBar } from './left-sidebar';
import { Treds } from './treds/treds';
import { HomePage } from './home-page/home-page';
=======
import { Route } from 'react-router-dom'
import style from './main-content.module.css'
import { Walls } from './Walls/Walls';
import { Treds } from './treds';
import { Profile } from './profile/profile';
>>>>>>> 179fe68d5c135602f91e0ca7b3d395997c2fe112




export const MainContent = ({state, dispatch}) => {
    return (
        <div className={style.mainContent}>
<<<<<<< HEAD
            <BrowserRouter>
                <LeftSideBar  />
                <Route path={'/homePage'} component={()=><HomePage state={state} dispatch={dispatch}/>} />
                <Route path={'/treds'} component={()=><Treds state={state} dispatch={dispatch}/>} />
                <Route path={'/anime'} component={()=><img src={require('./common/pic.jpg')} alt = "Not found "/>} /> 
            </BrowserRouter>
=======
                {/* <Route path={'/myWall'} component={()=><MyWall state={state} dispatch={dispatch}/>} /> */}
                <Route path={'/walls'} component={()=><Walls state={state} dispatch={dispatch}/>} />
                <Route path={'/myTreds'} component={()=><Treds/>} />
                <Route path={'/profile'} component={()=><Profile state={state.profile} dispatch={dispatch}/>} />
>>>>>>> 179fe68d5c135602f91e0ca7b3d395997c2fe112
        </div>
    )
}
