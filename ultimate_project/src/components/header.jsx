import React from 'react';
import '../App.css'         

export const Header = (props) => {
    return (
    <header className={'header'}>{props.header}</header>
    )
}