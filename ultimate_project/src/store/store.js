import { createStore, combineReducers } from 'redux';
import { profileReducer } from './reducers/profileReducer.js'

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
                { postTitle: 'title post 1', id: '1' },
                { postTitle: 'title post 2', id: '2' },
                { postTitle: 'title post 3', id: '3' },
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

    switch (action.type) {
        case 'ADD_POST':
            let stateCopy = { ...state, treds: [...state.treds] };
            stateCopy.treds[0].posts.push({ postTitle: 'new title' })
            stateCopy.treds[0] = { ...stateCopy.treds[0], posts: [...stateCopy.treds[0].posts] }
                return stateCopy;
        case 'DELETE_POST':
            let stateCopy1 = { ...state, treds: [...state.treds] };
            stateCopy1.treds[0].posts.forEach(element => { 
                let i = 0;
                if ( element.id === action.id) {
                    stateCopy1.treds[0].posts.splice( i, 1 );
                    stateCopy1.treds[0] = { ...stateCopy1.treds[0] };
                    return stateCopy1;

                } else i++;
            });

        // case 'EDIT_POST':
        // case 'LIKED':
     
    default:
    return { ...state }
    
}

}

export let store = createStore(combineReducers({
    profile: profileReducer,
    postObj: postReducer
}));

window.store = store