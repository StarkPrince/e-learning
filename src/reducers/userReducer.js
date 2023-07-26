const initialState = {
    user: null,
};

const userReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                user: action.payload,
            };
        case 'SIGN_OUT':
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;
