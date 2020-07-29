import React from 'react';
import style from'./post-style/post-footer.module.css';





export const PostFooter = ( props ) => {
    // let editPost = () => {
    //     dispatch(
    //         {
    //         type: "EDIT_POST"

    //         }
    //     )
    // }
    let deletePost = () => {
        props.dispatch(
            {
                type: "DELETE_POST",
                postId : props.postId
            }
        )
    }
    // let likePost = () => {
    //     dispatch(
    //         {
    //             type: "LIKED"
                
    //         }
    //     )
    // }
    return (
        <div className={style.postFooter}>
            
            
            <button type="image">
            <img src="https://lh3.googleusercontent.com/proxy/H5FdQXzz39HXgFboh0CgoYztbgfdgZ2Phe6DxrmTp5UfkFikcV4hDaiI0i3o-uBPhP7NDo9XCxKJ6NI-weD3Rc7OkZfaHYN5QifsCcnHMEeHhLseDYS9V5XBq_v7Ab1i" alt="Not Found"/>
            </button>
            <button onClick={"alert('нерабочая хренб')"}>поделиться</button>
            <button onClick={"alert('нерабочая хренб')"}>редактировать</button>
            <button type='submit' onClick={deletePost} >
            удалить
            
            </button>
        </div>
    )
}