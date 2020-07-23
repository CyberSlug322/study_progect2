import React from 'react';
import '../App.css'         

export const Header = (props) => {
    return (
    <header className={'header'}>{props.header}</header>
    )
}
 // let addPost = () => {
    //     props.dispatch(
    //         {
    //             type: 'ADD_POST',
    //         123    postTitle: 'new title'
    //         })
    // };