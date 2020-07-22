import React from 'react';
import '../App.css'      
import { Post } from './post';   

export const  Posts = (props) => {
    return (
    <div className={'posts'}>
         <Post postTitle={'нозваниее1'} />
             <Post postTitle={'нозваниее2'} />
             <Post postTitle={'нозваниее3'} />
    </div>
    )
}