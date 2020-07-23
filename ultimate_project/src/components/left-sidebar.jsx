import React from 'react';
import '../App.css'         
import { NavLink } from 'react-router-dom';

export const LeftSideBar = (props) => {
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
        
        </navbar>
    )
}
// let addPost = () => {
    //     props.dispatch(
    //         {
    //             type: 'ADD_POST',
    //         123    postTitle: 'new title'
    //         })
    // };