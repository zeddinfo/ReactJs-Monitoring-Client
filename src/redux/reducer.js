const initState = {
    value: 0
};

const reducer = (state = initState, action) => {
    if(action.type == 'UPDATE_POSITION'){
        return state;
    } 
    if(action.type == 'CLEAR_POSITION'){
        return {
            ...state,
            state:[],
        }
    }

    return state;
}

export default reducer;