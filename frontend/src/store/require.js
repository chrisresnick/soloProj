const REQUIRE_LOGIN = "require/requireLogin"
const REQUIRE_CREATE = "require/create"

export const setRequireLogin = (bool) => {
    return {
        type: REQUIRE_LOGIN,
        payload: bool
    }
}

export const requireCreate = (bool) => {
    return {
        type: REQUIRE_CREATE,
        payload: bool
    }
}

const defaultState = {
    requireLogin:false,
    requireCreate:false
};

const requireReducer = (state=defaultState, action) => {
    let newState
    switch(action.type){
        case REQUIRE_LOGIN:
            newState = {...state};
            newState.requireLogin = action.payload;
            return newState;
        case REQUIRE_CREATE:
            newState = {...state};
            newState.requireCreate = action.payload;
            return newState;
        default:
            return state
    }
}

export default requireReducer
