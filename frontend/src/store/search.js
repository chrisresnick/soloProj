const init = {searchTerm: ""}

const SET_TERM = "search/setTerm"

export const setSearch = (term) => {
    return {
        type: SET_TERM,
        payload: term
    }
}

const searchReducer = (state=init, action) => {
    switch(action.type){
        case SET_TERM:
            return {searchTerm: action.payload};
        default:
            return state;
    }
}

export default searchReducer;
