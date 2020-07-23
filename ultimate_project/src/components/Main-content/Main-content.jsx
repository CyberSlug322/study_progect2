import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import style from './main-content.module.css'
import { LeftSideBar } from './left-sidebar';
import { Walls } from './Walls/Walls';
import { MyWall } from './my-wall/my-wall';




export const MainContent = ({state, dispatch}) => {
    return (
        <div className={style.mainContent}>
            <BrowserRouter>
                <LeftSideBar  />
                <Route path={'/myWall'} component={()=><MyWall state={state} dispatch={dispatch}/>} />
                <Route path={'/walls'} component={()=><Walls state={state} dispatch={dispatch}/>} />
                {/* <Route path={'/pic'} component={()=><img src={require('./pic.jpg')} alt = "Not found "/>} /> */}
            </BrowserRouter>
        </div>
    )
}
