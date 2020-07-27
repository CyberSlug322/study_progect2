import React, { useEffect, Fragment } from 'react';
import style from './profile.module.css'
import { NavLink } from 'react-router-dom';
import {userNameOnChangeAC} from '../../../store/action-creators/profileAC.js'

const InputUserName = ({ userName, dispatch }) => {
    let inputUserName = React.createRef();
    const blurUserName = () => {
        dispatch({
            type: 'USER_NAME_UN_FOCUS'
        });
    }
    const changeUserName = () => {
        dispatch(userNameOnChangeAC(inputUserName.current.value))
    }
    useEffect(() => inputUserName.current.focus());
    return <input ref={inputUserName} onBlur={blurUserName} value={userName} onChange={changeUserName} />
}
const UserName = ({ isOnFocus, userName, dispatch }) => {
    const selectUserName = () => {
        dispatch({
            type: 'USER_NAME_ON_FOCUS'
        });
    }
    return isOnFocus ?
        <InputUserName userName={userName} dispatch={dispatch} /> :
        <h4 onClick={selectUserName} >{userName}</h4>
}
export const Profile = ({ profile, dispatch }) => {
    const textAreaRef = React.createRef();
    const changeText = () => {
        dispatch({
            type: 'CHANGE_PROFILE_TEXT',
            text: textAreaRef.current.value
        })
    };
    return (
        <Fragment className={style.profile}>
            <img src={'https://i.pinimg.com/236x/9a/da/96/9ada96a378cf24b35ec421125625cdc3.jpg'}
                alt={'not found'} />

            <UserName isOnFocus={profile.userNameOnFocus} userName={profile.userName} dispatch={dispatch} />

            <textarea ref={textAreaRef} placeholder={'test text area'}
                onChange={changeText} value={profile.profileText} />

            <NavLink to={'/settings'}>
                <div className={style.settingBtn}>settings</div>
            </NavLink>

        </Fragment>
    )
}