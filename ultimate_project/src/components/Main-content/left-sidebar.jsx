import React from 'react';        
import { NavLink } from 'react-router-dom';
import style from './main-content.module.css';



export const LeftSideBar = (props) => {
    return (
    <navbar className={style.LeftSideBar}>

        <NavLink to={'/homePage'}>
            <div>
                home page
            </div>
        </NavLink>

        <NavLink to={'/treds'}>
            <div>
                treds
            </div>
        </NavLink>
        
        <NavLink to={'/recommended'}>
            <div>
                recommended
            </div>
        </NavLink>

        <NavLink to={'/notifications'}>
            <div>
                deadfications
            </div>
        </NavLink>

        <NavLink to={'/anime'}>
            <div>
                random devka
            </div>
        </NavLink>
        
        </navbar>
    )
}