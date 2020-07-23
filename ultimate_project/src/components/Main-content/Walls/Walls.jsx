import React from 'react';
// import '../App.css'         
import { Posts } from './posts'
import { RightSideBar } from '../common/right-sidebar'

export const  Walls = (props) => {
    return (
    <div className={'walls'}>
        <Posts state = {props.state} dispatch = {props.dispatch}/>
        <RightSideBar RightSideBarText={'somethi\nng else something\n elssom\nething elsesome\nthing el\nse'} />
    </div>
    )
}