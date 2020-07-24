import React from 'react';
import style from './profile.module.css'

export const Profile = ({ state, dispatch }) => {
    const textAreaRef = React.createRef();
    const changeText = () => {
        dispatch({
            type: 'CHANGE_PROFILE_TEXT',
            text: textAreaRef.current.value
        })
    };
    return (
        <div className={style.profile}>

            <img src={'https://i.pinimg.com/236x/9a/da/96/9ada96a378cf24b35ec421125625cdc3.jpg'}
                alt={'not found'} />

            user name

            <textarea ref={textAreaRef} placeholder={'test text area'}
                onChange={changeText} value={state.profileText} />
        </div> 
    )
}