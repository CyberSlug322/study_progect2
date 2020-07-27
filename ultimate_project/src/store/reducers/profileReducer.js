let profileState = {
    profileText: '',
    userName: 'Egor',
    userNameOnFocus: false,

}

const USER_NAME_ON_CHANGE = 'USER_NAME_ON_CHANGE'

export const profileReducer = (state = profileState, action) => {
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