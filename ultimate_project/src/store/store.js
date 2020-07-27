import { createStore, combineReducers } from 'redux';

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
    
    if ( action.type === 'ADD_POST' ) {
        
        let stateCopy = {...state, treds: [...state.treds]};
        stateCopy.treds[0].posts.push({ postTitle: 'new title' })
        stateCopy.treds[0] = {...stateCopy.treds[0], posts: [...stateCopy.treds[0].posts]}
            return stateCopy;
    } else {
        return {...state}
    }
}

let profileState = {
    profileText: ''
}

const profileReducer = (state = profileState, action) => {
    if (action.type === 'CHANGE_PROFILE_TEXT') {
        //state.profileText = action.text;
         return {...state, profileText: action.text}
        //return state
    }
    return state;
}



export let store = createStore(combineReducers({
    profile: profileReducer,
    post: postReducer 
}));

window.store = store