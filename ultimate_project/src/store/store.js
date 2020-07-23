import {createStore} from 'redux';



let initialState = {
    posts: [
        { postTitle: 'title post 1' },
        { postTitle: 'title post 2' },
        { postTitle: 'title post 3' },
    ],
    myPosts: [
        { postTitle: 'title of my post 1' },
        { postTitle: 'title of my post 2' },
        { postTitle: 'title of my post 3' },
    ]
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            let stateCopy = { ...state, posts: [...state.posts] };
            let newPost = { postTitle: 'title of the new post' }
            stateCopy.posts.push(newPost)
            return stateCopy;

        default:
            return state;
    };
}

export let store = createStore(reducer);