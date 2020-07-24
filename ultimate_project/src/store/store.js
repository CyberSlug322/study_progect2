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

let reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    };
}

let profileState = {
    profileText: 'sss'
}

const profileReducer = (state = profileState, action) => {
    if (action.type === 'CHANGE_PROFILE_TEXT') {
        state.profileText = action.text;
        // return {...state, profileText: action.text}
        return state
    }
    return state;
}



export let store = createStore(combineReducers({
    profile: profileReducer,
    reducer
}));

window.store = store