import React from 'react';
// import '../App.css'         
import { NavLink } from 'react-router-dom';

export const Navbar = (props) => {
    return (
    <navbar className={'LeftSideBar'}>
        
        <NavLink to={'/myWall'}>
            <div>
                my wall
            </div>
        </NavLink>

        <NavLink to={'/walls'}>
            <div>
                walls
            </div>
        </NavLink>

        <NavLink to={'/pic'}>
            <div>
                devka
            </div>
        </NavLink>
        
        </navbar>
    )
}