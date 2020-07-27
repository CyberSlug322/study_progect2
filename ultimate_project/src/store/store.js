import { createStore, combineReducers } from 'redux';
import {profileReducer} from './reducers/profileReducer.js'

let initialState = {
    treds: [
        {
            tredTitle: 'anime girls',
            members: [
                {
                    userId: 121,
                    userName: 'Viktor',
                    userAvatarSrc: 'src'
                }
            ],
            posts: [
                { postTitle: 'title post 1' },
                { postTitle: 'title post 2' },
                { postTitle: 'title post 3' },
            ]
        }
    ],
    user: {
        userId: 121,
        UserName: 'Anton',
        subscribeTreds: [],
        userTred: {
            tredTitle: 'anime girls',
            members: [
                {
                    userId: 121,
                    userName: 'Viktor',
                    userAvatarSrc: 'src'
                }
            ],
            posts: [
                { postTitle: 'title user post 1' },
                { postTitle: 'title user post 2' },
                { postTitle: 'title user post 3' },
            ]
        }
    }
}

let postReducer = (state = initialState, action) => {
    if ( state === initialState ) {
        return {...state}
    }
    switch (action.type) {
        case 'ADD_POST' : return {...state, postTitle: 'new title' }

        

        default:
            return state;
    };
}

export let store = createStore(combineReducers({
    profile: profileReducer,
    post: postReducer 
}));

window.store = store