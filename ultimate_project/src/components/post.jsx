import React from 'react';
import '../App.css'

export const Post = (props) => {
    return (
    <div className={'post'}>{props.postTitle}</div>
    )
}