import React from 'react';
import style from './header.module.css';

export const Header = (props) => {
    return (
    <header className={style.header}>{props.header}</header>
    )
}
