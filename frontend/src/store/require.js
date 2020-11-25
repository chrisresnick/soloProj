const REQUIRE_LOGIN = "require/requireLogin"

export const setRequireLogin = (bool) => {
    return {
        type: REQUIRE_LOGIN,
        payload: bool
    }
}

const defaultState = {requireLogin:false};

const requireReducer = (state=defaultState, action) => {
    let newState
    switch(action.type){
        case REQUIRE_LOGIN:
            newState = {...state}
            newState.requireLogin = action.payload;
            return newState;
        default:
            return state
    }
}

export default requireReducer
