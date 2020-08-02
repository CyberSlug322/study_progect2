import { createStore, combineReducers } from 'redux';

const USER_NAME_ON_CHANGE = 'USER_NAME_ON_CHANGE';


let initialState = {
    communities: [
        {
            communityTitle: 'anime girls',
            communityId: '1',
            url: '/community1',
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
        },
        {
            communityTitle: 'anime girls',
            communityId: '2',
            url: '/community2',
            members: [
                {
                    userId: 121,
                    userName: 'Viktor',
                    userAvatarSrc: 'src'
                }
            ],
            posts: [
                { postTitle: 'title post 1', postId: '1' },
                { postTitle: 'title post 2', postId: '2' },
                { postTitle: 'title post 3', postId: '3' },
            ]
        }
    ],
    user: {
        userId: 121,
        UserName: 'Anton',
        subscriptions: [],
        communitiesByUser: {
            communityTitle: 'anime girls',
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

let communityReducer = (state = initialState, action) => {
    let stateCopy                                    
    switch (action.type) {
        case 'ADD_POST':
            stateCopy = { ...state, communities: [...state.communities] };
            stateCopy.communities[0].posts.push({ postTitle: 'new title', id: Date.now()})
            stateCopy.communities[0] = { ...state.communities[0], posts: [...state.communities[0].posts] }
                return stateCopy;
        case 'DELETE_POST':
            // debugger
            stateCopy = { ...state, communities: [...state.communities] };
            stateCopy.communities[0] = { ...state.communities[0], posts: [...state.communities[0].posts]}
            stateCopy.communities[0].posts = stateCopy.communities[0].posts.filter(element => element.id !== action.postId);
            return stateCopy;

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
    communityArr: communityReducer
}));

export const userNameOnChangeAC = (userName) => {
    return {
        type: 'USER_NAME_ON_CHANGE',
        userName: userName
    }
}