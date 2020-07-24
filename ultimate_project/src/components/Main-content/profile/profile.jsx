import React from 'react';
import style from './profile.module.css'

// export class Profile extends React.Component {
//     constructor({ state, dispatch }) {
//         super({state, dispatch});
//         this.textAreaRef = React.createRef()
//         this.changeText = () => {
//             dispatch({
//                 type: 'CHANGE_PROFILE_TEXT',
//                 text: this.textAreaRef.current.value
//             })
//         }
//         this.state = state
//     }

//     render() {
//         const component = () => {
//             debugger
//             return (
//                 <div className={style.profile}>
//                 <img src={'https://i.pinimg.com/236x/9a/da/96/9ada96a378cf24b35ec421125625cdc3.jpg'}
//                     alt={'not found'} />
//             user name
//                 <textarea id={1} key={2} ref={this.textAreaRef} placeholder={'test text area'}
//                     onChange={this.changeText} value={this.state.profileText} />
//             </div>
//             )
//         }

//         return <component />

//     }
// }

export const Profile = ({ state, dispatch }) => {
    const textAreaRef = React.createRef();
    const changeText = () => {
        dispatch({
            type: 'CHANGE_PROFILE_TEXT',
            text: textAreaRef.current.value
        })
    };

    const Text = () => {
        return (
            <div className={style.profile}>
            <img src={'https://i.pinimg.com/236x/9a/da/96/9ada96a378cf24b35ec421125625cdc3.jpg'}
                alt={'not found'} />
            user name
            <textarea id={1} key={2} ref={textAreaRef} placeholder={'test text area'}
                onChange={changeText} value={state.profileText} />
        </div>
        )
    }

    return (
        <Text/>
    )
}