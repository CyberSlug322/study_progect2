import React, { useEffect } from 'react';
import style from './profile.module.css'
import { NavLink } from 'react-router-dom';
import { userNameOnChangeAC } from '../../../store/store'

const InputUserName = ({ userName, dispatch }) => {
    let inputUserName = React.createRef();
    const blurUserName = () => {
        dispatch({
            type: 'USER_NAME_UN_FOCUS'
        });
    }
    const changeUserName = (event) => {
        dispatch(userNameOnChangeAC(event.target.value))
    }
    useEffect(() => { inputUserName.current.focus() });
    return (<input ref={inputUserName} onBlur={blurUserName}
        value={userName} onChange={changeUserName}
    />)
}

export const Profile = ({ profile, dispatch }) => {
    const selectUserName = () => {
        dispatch({
            type: 'USER_NAME_ON_FOCUS'
        });
    }
    return (
        <div className={style.profile}>
            <img src={'https://i.pinimg.com/236x/9a/da/96/9ada96a378cf24b35ec421125625cdc3.jpg'}
                alt={'not found'} />

            {profile.userNameOnFocus ?
                <InputUserName dispatch={dispatch} userName={profile.userName} /> :
                <h4 onClick={selectUserName} >{profile.userName}</h4>}
            <NavLink to={'/settings'}>
                <div className={style.settingBtn}>settings</div>
            </NavLink>
        </div>
    )
}