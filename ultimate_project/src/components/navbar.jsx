import React from 'react';   
import { NavLink } from 'react-router-dom';
import style from './navbar.module.css'

export const Navbar = (props) => {
    return (
        <nav className={style.navbar}>

            {/* <NavLink to={'/myWall'}><div>my wall</div></NavLink> */}

            <NavLink className={style.link} to={'/walls'}><div className={style.button}>walls</div></NavLink>

            <NavLink className={style.link} to={'/myTreds'}><div className={style.button}>my treds</div></NavLink>

            <NavLink className={style.link} to={'/profile'}><div className={style.button}>profile</div></NavLink>

        </nav>
    )
}