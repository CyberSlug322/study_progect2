import React from 'react';
import '../App.css'         

export const LeftSideBar = (props) => {
    return (
    <navbar className={'LeftSideBar'}>{props.LeftSideBarTitleTextItem}</navbar>
    )
}