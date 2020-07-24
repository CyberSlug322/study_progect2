import React from 'react';      
import { Posts } from './posts';
import { RightSideBar } from '../common/right-sidebar';
import style from './treds.module.css';

export const  Treds = ({state, dispatch}) => {
    return (
    <div className={style.treds}>
        <Posts state = {state} dispatch = {dispatch}/>
        <RightSideBar RightSideBarText={'something'} />
    </div>
    )
}