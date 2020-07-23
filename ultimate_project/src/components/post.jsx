import React from 'react';
import '../App.css'

export const Post = (props) => {
    return (
    <div className={'post'}> {props.postTitle} </div>
    )
};
// let addPost = () => {
    //     props.dispatch(
    //         {
    //             type: 'ADD_POST',
    //         123    postTitle: 'new title'
    //         })
    // };