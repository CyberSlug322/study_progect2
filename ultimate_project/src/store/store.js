import { createStore, combineReducers } from 'redux';

const USER_NAME_ON_CHANGE = 'USER_NAME_ON_CHANGE';


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
            stateCopy.treds[0].posts.push({ postTitle: 'new title', id: Date.now()})
            stateCopy.treds[0] = { ...stateCopy.treds[0], posts: [...stateCopy.treds[0].posts] }
                return stateCopy;
        case 'DELETE_POST':
            let stateCopy1 = { ...state, treds: [...state.treds] };
            stateCopy1 = { ...state, posts: [...stateCopy1.treds[0].posts]}
            stateCopy1.treds[0].posts.filter(element => element.id !== action.id);
            return stateCopy1;

        // case 'EDIT_POST':
        // case 'LIKED':
     
    default:
    return { ...state }
    
}

}

let profileState = {
    profileText: '',
    userName: 'Egor',
    userNameOnFocus: false,

}

const profileReducer = (state = profileState, action) => {
    switch (action.type) {

        case 'CHANGE_PROFILE_TEXT':
            return { ...state, profileText: action.text };

        case 'USER_NAME_ON_FOCUS':
            return {...state, userNameOnFocus: true};

        case 'USER_NAME_UN_FOCUS':
            return {...state, userNameOnFocus: false};

        case USER_NAME_ON_CHANGE:
            return {...state, userName: action.userName}

        default:
            return state;

    }
}

export let store = createStore(combineReducers({
    profile: profileReducer,
    postObj: postReducer
}));

export const userNameOnChangeAC = (userName) => {
    return {
        type: 'USER_NAME_ON_CHANGE',
        userName: userName
    }
}