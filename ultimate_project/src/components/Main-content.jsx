import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import '../App.css'
import { LeftSideBar } from './left-sidebar';
import { Walls } from './Walls';
import { MyWall } from './my-wall';



export const MainContent = (props) => {
    return (
        <div className={'main-content'}>
            <BrowserRouter>
                <LeftSideBar  />
                {/* <Walls 12312state={props.state} dispatch={props.dispatch} /> */}
                { /* 123 <MyWall /> */}

                <Route path={'/myWall'} component={()=><MyWall state={props.state} dispatch={props.dispatch}/>} />
                <Route path={'/walls'} component={()=><Walls state={props.state} dispatch={props.dispatch}/>} />
            </BrowserRouter>
        </div>
    )
}
