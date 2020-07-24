import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import style from './main-content.module.css';
import { LeftSideBar } from './left-sidebar';
import { Treds } from './treds/treds';
import { HomePage } from './home-page/home-page';




export const MainContent = ({state, dispatch}) => {
    return (
        <div className={style.mainContent}>
            <BrowserRouter>
                <LeftSideBar  />
                <Route path={'/homePage'} component={()=><HomePage state={state} dispatch={dispatch}/>} />
                <Route path={'/treds'} component={()=><Treds state={state} dispatch={dispatch}/>} />
                <Route path={'/anime'} component={()=><img src={require('./common/pic.jpg')} alt = "Not found "/>} /> 
            </BrowserRouter>
        </div>
    )
}
